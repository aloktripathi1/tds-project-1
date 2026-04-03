"""
THE SIGNAL — Reusable Weekly Solver
====================================
Run: python solve.py
Solves all 4 puzzles and prints the JWT completion token.
Works for any week — clues/fragments change but the structure stays the same.
"""
import json, urllib.request, urllib.error, re

BASE = 'https://tds-network-games.sanand.workers.dev/signal'
EMAIL = '23f3003225@ds.study.iitm.ac.in'
TOKEN = None

# ── API helper ────────────────────────────────────────────────────
def api(method, path, body=None):
    global TOKEN
    url = BASE + path
    data = json.dumps(body).encode() if body else None
    headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Accept': '*/*',
        'Origin': 'https://tds-network-games.sanand.workers.dev',
        'Referer': 'https://tds-network-games.sanand.workers.dev/signal/'
    }
    if TOKEN:
        headers['X-Session-Token'] = TOKEN
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body_text = e.read().decode()
        try:
            return json.loads(body_text)
        except Exception:
            return {'error': body_text, 'status': e.code}

def pp(label, obj):
    print(f"\n[{label}] {json.dumps(obj, indent=2)}")

# ── Step 1: Start session ────────────────────────────────────────
def start_session():
    global TOKEN
    r = api('POST', '/start', {'email': EMAIL})
    TOKEN = r.get('session_token', '')
    print(f"Session started — week={r.get('week_id')}, room={r.get('current_room')}, actions={r.get('actions_used')}")
    return r

# ── Step 2: Visit every room & collect all items ─────────────────
def collect_all_items():
    """Visit all 9 accessible rooms via /move {to:ROOM} and take every item."""
    rooms = [
        'ENTRANCE_HALL', 'SERVER_ROOM_A', 'SERVER_ROOM_B',
        'STORAGE_ROOM', 'LABORATORY', 'CONTROL_ROOM',
        'ARCHIVE_ROOM', 'MAINTENANCE_BAY', 'POWER_ROOM',
    ]
    for room in rooms:
        r = api('POST', '/move', {'to': room})
        if r.get('error'):
            continue
        look = api('GET', '/look')
        for item in look.get('items_here', []):
            api('POST', '/take', {'item': item})
            print(f"  Took {item} from {room}")

# ── Step 3: Examine key items to extract clues ──────────────────
def examine_items():
    """Use /examine?target=ITEM to read full descriptions of key items."""
    key_items = [
        'INSPECTION_CERTIFICATE', 'NOTEBOOK',
        'SIGNAL_LOG', 'BACKUP_LOG',
    ]
    descs = {}
    for item in key_items:
        r = api('GET', f'/examine?target={item}')
        desc = r.get('description', '')
        descs[item] = desc
        print(f"  {item}: {desc[:120]}...")
    return descs

# ── Step 4: Craft POWERED_TUNER ─────────────────────────────────
def craft_powered_tuner():
    r = api('POST', '/combine', {'item_a': 'FREQUENCY_TUNER', 'item_b': 'POWER_CELL'})
    if r.get('error'):
        print(f"  Combine failed (may already be crafted): {r.get('error')}")
    else:
        print(f"  Crafted: {r.get('output', r.get('message', 'POWERED_TUNER'))}")

# ── Step 5: Derive PIN from clues ───────────────────────────────
def derive_pin(descs):
    """
    PIN = inspection_year + sublevel_number (both from item descriptions).
    NOTEBOOK says: 'PIN = inspection year plus sublevel number'
    INSPECTION_CERTIFICATE has the year. NOTEBOOK has the floor/sublevel.
    """
    cert = descs.get('INSPECTION_CERTIFICATE', '')
    notebook = descs.get('NOTEBOOK', '')

    # Extract 4-digit year from certificate
    year_match = re.search(r'Inspection date:\s*(\d{4})', cert)
    year = int(year_match.group(1)) if year_match else None

    # Extract sublevel/floor number from notebook
    sublevel_match = re.search(r'(?:Level|floor|sublevel)\s*(?:number\s*)?(\d+)', notebook, re.IGNORECASE)
    sublevel = int(sublevel_match.group(1)) if sublevel_match else None

    if year and sublevel is not None:
        pin = year + sublevel
        print(f"  PIN = {year} + {sublevel} = {pin}")
        return pin
    print(f"  Could not derive PIN automatically (year={year}, sublevel={sublevel})")
    return None

# ── Step 6: Find common frequency ───────────────────────────────
def find_common_frequency(descs):
    """The answer is the single frequency appearing in both SIGNAL_LOG and BACKUP_LOG."""
    sig = descs.get('SIGNAL_LOG', '')
    bak = descs.get('BACKUP_LOG', '')

    sig_freqs = set(re.findall(r'(\d+\.\d+)\s*MHz', sig))
    bak_freqs = set(re.findall(r'(\d+\.\d+)\s*MHz', bak))
    common = sig_freqs & bak_freqs

    if common:
        freq = float(common.pop())
        print(f"  Common frequency: {freq} MHz")
        return freq
    print(f"  No common frequency found! sig={sig_freqs}, bak={bak_freqs}")
    return None

# ── Step 7: Solve Puzzle 1 (PIN) ────────────────────────────────
def solve_pin(pin):
    api('POST', '/move', {'to': 'SERVER_ROOM_A'})
    r = api('POST', '/use', {'target': 'PIN_TERMINAL', 'value': pin})
    frag = r.get('fragment_revealed', r.get('fragment'))
    print(f"  Puzzle 1 PIN → Fragment 1: {frag}")
    return frag

# ── Step 8: Solve Puzzle 2 (Frequency) ──────────────────────────
def solve_frequency(freq):
    api('POST', '/move', {'to': 'MAINTENANCE_BAY'})
    r = api('POST', '/use', {'target': 'RADIO_TRANSMITTER', 'value': freq})
    frag = r.get('fragment_revealed', r.get('fragment'))
    print(f"  Puzzle 2 FREQ → Fragment 2: {frag}")
    return frag

# ── Step 9: Solve Puzzle 3 (Verify) ─────────────────────────────
def solve_verify(f1, f2):
    api('POST', '/move', {'to': 'CONTROL_ROOM'})
    r = api('POST', '/use', {'target': 'TERMINAL_3', 'inputs': [f1, f2]})
    frag = r.get('fragment_revealed', r.get('fragment'))
    print(f"  Puzzle 3 VERIFY → Fragment 3: {frag} (also unlocks CORE_CHAMBER)")
    return frag

# ── Step 10: Solve Puzzle 4 (Passcode → Escape) ─────────────────
def solve_passcode(f1, f2, f3):
    api('POST', '/move', {'to': 'CORE_CHAMBER'})
    passcode = f1 + f2 + f3
    print(f"  Passcode: {passcode}")
    r = api('POST', '/use', {'target': 'EXIT_KEYPAD', 'value': passcode})
    token = r.get('completion_token')
    if token:
        print(f"\n{'='*60}")
        print(f"  ESCAPED! Score: {r.get('score')}, Actions: {r.get('actions_used')}")
        print(f"{'='*60}")
        print(f"\nJWT COMPLETION TOKEN:\n{token}")
        print(f"\n{'='*60}")
    else:
        pp("Passcode attempt failed", r)
    return token

# ── Main ─────────────────────────────────────────────────────────
def solve():
    print("=" * 60)
    print("THE SIGNAL — Automated Solver")
    print("=" * 60)

    start_session()

    # Check if puzzles are already solved (resuming session)
    inv = api('GET', '/inventory')
    puzzles = inv.get('puzzles', {})

    print("\n[1/10] Collecting all items...")
    collect_all_items()

    print("\n[2/10] Crafting POWERED_TUNER...")
    craft_powered_tuner()

    print("\n[3/10] Examining key items for clues...")
    descs = examine_items()

    print("\n[4/10] Deriving PIN from clues...")
    pin = derive_pin(descs)

    print("\n[5/10] Finding common frequency...")
    freq = find_common_frequency(descs)

    f1 = puzzles.get('PUZZLE_1_PIN', {}).get('fragment')
    f2 = puzzles.get('PUZZLE_2_FREQUENCY', {}).get('fragment')
    f3 = puzzles.get('PUZZLE_3_VERIFY', {}).get('fragment')

    if not f1:
        print("\n[6/10] Solving Puzzle 1: PIN...")
        f1 = solve_pin(pin)
    else:
        print(f"\n[6/10] Puzzle 1 already solved → {f1}")

    if not f2:
        print("\n[7/10] Solving Puzzle 2: Frequency...")
        f2 = solve_frequency(freq)
    else:
        print(f"\n[7/10] Puzzle 2 already solved → {f2}")

    if not f3:
        print("\n[8/10] Solving Puzzle 3: Verify...")
        f3 = solve_verify(f1, f2)
    else:
        print(f"\n[8/10] Puzzle 3 already solved → {f3}")

    print("\n[9/10] Entering CORE_CHAMBER & submitting passcode...")
    token = solve_passcode(f1, f2, f3)

    return token

if __name__ == '__main__':
    solve()
