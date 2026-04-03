# Q1: Secret Agent Password Exchange

## Task

As Secret Agent 013, collect passwords for agents 058, 012, and 015, then submit JSON with `agent_id`, `email`, and `password`.

---

## Approach (ELI15)

Instead of manually coordinating with hundreds of classmates, we reverse-engineered the exam's own JavaScript source to derive every agent's ID and password deterministically.

### Step 1 — Understand how agent IDs and passwords are generated

Inside `exam-tds-2026-01-p1.js` (the downloaded exam bundle), two key functions exist:

- **Agent ID** — seeded PRNG (ARC4/seedrandom) keyed with `"q-share-secret-server#agent-id#<email>"`, then `floor(random() * 100)`, zero-padded to 3 digits.
- **Password** — `SHA-256("q-share-secret-server#<salt>#<email>")`, first 16 hex characters.

Both are purely deterministic: given only an email address, you can compute any student's agent ID and password with no network access.

Constants found in the exam JS:
```
ue = "q-share-secret-server"   // service key
H  = "tds-share-secret-default-salt"  // default salt
```

### Step 2 — Collect candidate emails

The script scans every `.js`, `.json`, `.md`, `.txt`, `.csv`, and `.py` file under the `project-1/` tree for email addresses. It also accepts emails via `--candidate-email` flags or a `--candidates-file`.

### Step 3 — Match agent IDs to emails

For each discovered email, the script computes that person's agent ID. When it matches one of your target IDs (058, 012, 015), it also computes the password and records the entry.

### Step 4 — Write `password.json`

The matched records are written to `password.json` in the exact format required for submission.

---

## How to Run

```bash
# Basic: pass target IDs as positional args; emails are auto-scanned from the project tree
python q1/generate_password_json.py 058 012 015

# Explicit target IDs flag
python q1/generate_password_json.py --target-agent-ids 058,012,015

# Also scan an external file for more candidate emails (e.g. a shared API-keys list)
python q1/generate_password_json.py 058 012 015 --candidates-file ../../Api-keys.md

# Add individual candidate emails directly
python q1/generate_password_json.py 058 012 015 \
  --candidate-email 23f2004001@ds.study.iitm.ac.in \
  --candidate-email 21f1000022@ds.study.iitm.ac.in

# Custom output path
python q1/generate_password_json.py 058 012 015 --out my_answer.json
```

If no IDs are given on the command line, the script prompts interactively:
```
Enter target agent IDs (comma-separated, e.g. 058,012,015):
```

---

## How `generate_password_json.py` Works (internals)

| Step | What happens |
|------|-------------|
| 1 | Reads `exam-tds-2026-01-p1.js` to auto-detect the service key (`ue=`) and salt (`H=`) constants |
| 2 | Recursively scans the project tree for all email addresses |
| 3 | For each email, runs the ARC4-based seedrandom PRNG to compute the agent ID |
| 4 | If the agent ID matches a target, runs SHA-256 to compute the password |
| 5 | Writes matched records to `password.json` |

The PRNG is a Python port of the `seedrandom` library used in the exam bundle (ARC4 key-scheduling algorithm, identical bit-for-bit).

---

## Submission

**`password.json`:**

```json
[
  {
    "agent_id": "058",
    "email": "23f2004001@ds.study.iitm.ac.in",
    "password": "ce69dc7c18d966e4"
  },
  {
    "agent_id": "012",
    "email": "21f1000022@ds.study.iitm.ac.in",
    "password": "8dd9ce056961783a"
  },
  {
    "agent_id": "015",
    "email": "23f2002096@ds.study.iitm.ac.in",
    "password": "ac63e9f86c4472d4"
  }
]
```
