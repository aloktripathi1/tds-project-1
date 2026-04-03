import argparse
import hashlib
import json
import pathlib
import re
import sys


SERVICE_KEY = "q-share-secret-server"
DEFAULT_SALT = "tds-share-secret-default-salt"
EMAIL_RE = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
UE_RE = re.compile(r'\bue="([^"]+)"')
SALT_RE = re.compile(r'\bH="([^"]+)"')

WIDTH = 256
CHUNKS = 6
DIGITS = 52
START_DENOM = WIDTH**CHUNKS
SIGNIFICANCE = 2**DIGITS
OVERFLOW = SIGNIFICANCE * 2
MASK = WIDTH - 1


class Arc4:
    def __init__(self, key: list[int]):
        if not key:
            key = [0]
        self.i = 0
        self.j = 0
        self.S = list(range(WIDTH))
        j = 0
        for i in range(WIDTH):
            t = self.S[i]
            j = (j + key[i % len(key)] + t) & MASK
            self.S[i] = self.S[j]
            self.S[j] = t
        self.g(WIDTH)

    def g(self, count: int) -> int:
        r = 0
        i = self.i
        j = self.j
        s = self.S
        for _ in range(count):
            i = (i + 1) & MASK
            t = s[i]
            j = (j + t) & MASK
            s[i] = s[j]
            s[j] = t
            r = r * WIDTH + s[(s[i] + s[j]) & MASK]
        self.i = i
        self.j = j
        return r


def _flatten(obj, depth: int):
    if depth and isinstance(obj, dict):
        out = []
        for value in obj.values():
            try:
                out.append(_flatten(value, depth - 1))
            except Exception:
                pass
        return out if out else str(obj) + "\0"
    if depth and isinstance(obj, (list, tuple)):
        out = []
        for value in obj:
            try:
                out.append(_flatten(value, depth - 1))
            except Exception:
                pass
        return out if out else str(obj) + "\0"
    if isinstance(obj, str):
        return obj
    return str(obj) + "\0"


def _mixkey(seed, key: list[int]) -> str:
    stringseed = str(seed)
    smear = 0
    for j, ch in enumerate(stringseed):
        idx = j & MASK
        while idx >= len(key):
            key.append(0)
        smear ^= key[idx] * 19
        key[idx] = (smear + ord(ch)) & MASK
    return "".join(chr(k) for k in key)


class SeedRandom:
    # Port of the default seedrandom PRNG used in the exam bundle.
    def __init__(self, seed: str):
        key: list[int] = []
        _mixkey(_flatten(seed, 3), key)
        self.arc4 = Arc4(key)

    def random(self) -> float:
        n = self.arc4.g(CHUNKS)
        d = START_DENOM
        x = 0
        while n < SIGNIFICANCE:
            n = (n + x) * WIDTH
            d *= WIDTH
            x = self.arc4.g(1)
        while n >= OVERFLOW:
            n //= 2
            d //= 2
            x >>= 1
        return (n + x) / d


def normalize_email(email: str) -> str:
    return email.strip().lower()


def pad_agent_id(value: int | str) -> str:
    return str(int(value)).zfill(3)


def parse_target_ids(raw: str) -> list[str]:
    ids = []
    for part in raw.split(","):
        part = part.strip()
        if not part:
            continue
        match = re.search(r"\d+", part)
        if not match:
            continue
        n = int(match.group(0))
        if 0 <= n <= 99:
            ids.append(pad_agent_id(n))
    if not ids:
        raise ValueError("No valid target agent IDs found")
    return ids


def agent_id_from_email(email: str) -> str:
    email = normalize_email(email)
    if not email:
        raise ValueError("Email is required")
    rng = SeedRandom(f"{SERVICE_KEY}#agent-id#{email}")
    return pad_agent_id(int(rng.random() * 100))


def password_from_email(email: str, salt: str) -> str:
    email = normalize_email(email)
    s = f"{SERVICE_KEY}#{salt}#{email}".encode("utf-8")
    return hashlib.sha256(s).hexdigest()[:16]


def extract_emails_from_json(obj) -> list[str]:
    emails: list[str] = []
    if isinstance(obj, str):
        if EMAIL_RE.fullmatch(obj.strip()):
            emails.append(normalize_email(obj))
    elif isinstance(obj, list):
        for item in obj:
            emails.extend(extract_emails_from_json(item))
    elif isinstance(obj, dict):
        for key in ("email", "email_id", "emailId"):
            value = obj.get(key)
            if isinstance(value, str) and EMAIL_RE.fullmatch(value.strip()):
                emails.append(normalize_email(value))
        for value in obj.values():
            if isinstance(value, (dict, list)):
                emails.extend(extract_emails_from_json(value))
    return emails


def load_candidate_emails(file_path: str | None, direct_emails: list[str]) -> list[str]:
    found: set[str] = set()
    for email in direct_emails:
        email = normalize_email(email)
        if EMAIL_RE.fullmatch(email):
            found.add(email)

    if file_path:
        path = pathlib.Path(file_path)
        if not path.exists():
            raise FileNotFoundError(f"Candidate file not found: {file_path}")
        text = path.read_text(encoding="utf-8", errors="ignore")

        if path.suffix.lower() == ".json":
            data = json.loads(text)
            for email in extract_emails_from_json(data):
                found.add(email)
        else:
            for match in EMAIL_RE.findall(text):
                found.add(normalize_email(match))

    return sorted(found)


def load_candidate_emails_from_tree(scan_root: pathlib.Path) -> list[str]:
    found: set[str] = set()
    allowed = {".js", ".json", ".md", ".txt", ".csv", ".py"}
    for path in scan_root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in allowed:
            continue
        try:
            if path.stat().st_size > 2_000_000:
                continue
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for email in EMAIL_RE.findall(text):
            found.add(normalize_email(email))
    return sorted(found)


def detect_constants_from_exam_js(scan_root: pathlib.Path) -> tuple[str, str]:
    service = SERVICE_KEY
    salt = DEFAULT_SALT
    candidates = sorted(scan_root.glob("exam-tds-*-p1.js"))
    for path in candidates:
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        m1 = UE_RE.search(text)
        m2 = SALT_RE.search(text)
        if m1:
            service = m1.group(1)
        if m2:
            salt = m2.group(1)
        if m1 or m2:
            break
    return service, salt


def build_output(target_ids: list[str], candidate_emails: list[str], salt: str) -> tuple[list[dict], list[str]]:
    matches: dict[str, dict] = {}
    target_set = set(target_ids)
    for email in candidate_emails:
        agent_id = agent_id_from_email(email)
        if agent_id in target_set and agent_id not in matches:
            matches[agent_id] = {
                "agent_id": agent_id,
                "email": email,
                "password": password_from_email(email, salt),
            }

    output = [matches[aid] for aid in target_ids if aid in matches]
    missing = [aid for aid in target_ids if aid not in matches]
    return output, missing


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate password.json for Secret Agent exchange using reverse-engineered exam logic")
    parser.add_argument("agent_ids", nargs="*", help="Target agent IDs, e.g. 058 012 015")
    parser.add_argument(
        "--target-agent-ids",
        default="",
        help="Optional comma-separated target IDs (e.g. 058,012,015).",
    )
    parser.add_argument("--salt", default=DEFAULT_SALT, help="Salt used for password derivation")
    parser.add_argument("--service-key", default=SERVICE_KEY, help="Service key used for ID/password derivation")
    parser.add_argument("--scan-root", default="", help="Directory to recursively scan for emails (defaults to project-1 root)")
    parser.add_argument("--candidates-file", default="", help="Path to file containing candidate emails (txt/csv/md/json)")
    parser.add_argument("--candidate-email", action="append", default=[], help="Candidate email; can be repeated")
    parser.add_argument("--allow-partial", action="store_true", help="Write output even if some target IDs are missing")
    parser.add_argument("--out", default="password.json", help="Output JSON file path")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    script_dir = pathlib.Path(__file__).resolve().parent
    default_root = script_dir.parent
    scan_root = pathlib.Path(args.scan_root).resolve() if args.scan_root else default_root
    if not scan_root.exists() or not scan_root.is_dir():
        print(f"Error: invalid --scan-root: {scan_root}")
        return 2

    detected_service, detected_salt = detect_constants_from_exam_js(scan_root)
    global SERVICE_KEY
    SERVICE_KEY = args.service_key or detected_service
    salt = args.salt or detected_salt

    ids_from_positionals = ",".join(args.agent_ids)
    if args.target_agent_ids.strip():
        target_ids = parse_target_ids(args.target_agent_ids)
    elif ids_from_positionals.strip():
        target_ids = parse_target_ids(ids_from_positionals)
    elif sys.stdin.isatty():
        raw = input("Enter target agent IDs (comma-separated, e.g. 058,012,015): ").strip()
        target_ids = parse_target_ids(raw)
    else:
        print("Error: provide target IDs as positional args or --target-agent-ids")
        return 2

    candidates = set(load_candidate_emails(args.candidates_file or None, args.candidate_email))
    for email in load_candidate_emails_from_tree(scan_root):
        candidates.add(email)

    candidates = sorted(candidates)
    if not candidates:
        print("Error: no candidate emails found. Provide --candidate-email, --candidates-file, or a valid --scan-root")
        return 2

    output, missing = build_output(target_ids, candidates, salt)

    print(f"Target agent IDs: {', '.join(target_ids)}")
    print(f"Service key: {SERVICE_KEY}")
    print(f"Salt: {salt}")
    print(f"Scan root: {scan_root}")
    print(f"Candidate emails loaded: {len(candidates)}")

    if missing and not args.allow_partial:
        print(f"Error: missing agent IDs from candidate set: {', '.join(missing)}")
        print("Tip: add more candidate emails and run again.")
        return 1

    out_path = pathlib.Path(args.out)
    out_path.write_text(json.dumps(output, indent=2), encoding="utf-8")
    print(f"Wrote {len(output)} records to {out_path}")
    if missing:
        print(f"Warning: missing IDs (partial output): {', '.join(missing)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
