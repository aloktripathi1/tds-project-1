# Data Labyrinth — Auto Solver (Python port of labyrinth_solver.js)

# Usage:
#     python solve.py
# JWT will be saved to jwt_token.txt automatically.


import asyncio
import json
import math
import pathlib
import time

import urllib.request
import urllib.error

EMAIL = "your_student_email@ds.study.iitm.ac.in"   
BASE = "https://tds-network-games.sanand.workers.dev/labyrinth"
COLS = 11
TOTAL = 121
MOVE_LIMIT = 600
OPPOSITE = {"north": "south", "south": "north", "east": "west", "west": "east"}
DELTA = {"north": (-1, 0), "south": (1, 0), "east": (0, 1), "west": (0, -1)}

SESSION_TOKEN = None
QUESTION = None
current_room = None
exit_room = None
moves_used = 0
fragments_count = 0
visited = {}


# ── API ───────────────────────────────────────────────────────

def api(method, endpoint, body=None):
    global moves_used
    url = f"{BASE}/{endpoint}"
    headers = {"content-type": "application/json"}
    if SESSION_TOKEN:
        headers["x-session-token"] = SESSION_TOKEN
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return {"ok": True, "status": resp.status, "data": json.loads(resp.read())}
    except urllib.error.HTTPError as e:
        return {"ok": False, "status": e.code, "data": json.loads(e.read())}


def move_dir(direction):
    global moves_used, current_room, exit_room
    if moves_used >= MOVE_LIMIT - 30:
        return None
    res = api("POST", "move", {"direction": direction})
    time.sleep(0.3)
    if not res["ok"] or not res["data"].get("success"):
        return None
    moves_used = res["data"].get("moves_used", moves_used + 1)
    current_room = res["data"]["room_id"]
    if res["data"].get("is_exit_room") and exit_room is None:
        exit_room = res["data"]["room_id"]
        print(f"  Exit room detected: {exit_room}")
    return res["data"]


# ── START GAME ────────────────────────────────────────────────

def start_game():
    global SESSION_TOKEN, QUESTION, current_room, moves_used, fragments_count
    print("\nStarting game...")
    res = api("POST", "start", {"email": EMAIL})
    if not res["ok"] or not res["data"].get("session_token"):
        print("Failed:", json.dumps(res["data"]))
        return None
    d = res["data"]
    if d.get("status") == "completed":
        print("Session already completed for this week! Wait for next week.")
        print(f"   Week: {d.get('week_id')}, Moves: {d.get('moves_used')}, Status: {d.get('status')}")
        return None
    SESSION_TOKEN = d["session_token"]
    QUESTION = d["question"]
    current_room = d["current_room"]
    moves_used = d.get("moves_used", 0)
    fragments_count = d.get("fragments_collected", 0)
    print(f"   Email   : {EMAIL}")
    print(f"   Session : {SESSION_TOKEN}")
    print(f"   Week    : {d.get('week_id')}")
    print(f"   Room    : {d['current_room']}")
    print(f"   Question: [{QUESTION['id']}] {QUESTION['text']}")
    print(f"   Columns : {', '.join(QUESTION.get('columns_hint') or [])}")
    print(f"   Moves   : {moves_used}/{MOVE_LIMIT} | Fragments: {fragments_count}/12")
    return d


# ── DFS ───────────────────────────────────────────────────────

def explore(room_id, room_data):
    global fragments_count, exit_room, current_room
    if not room_data:
        return
    visited[room_id] = room_data
    exits = room_data.get("exits", [])
    if room_data.get("is_exit_room") and exit_room is None:
        exit_room = room_id

    # Collect items
    if room_data.get("has_item") and not room_data.get("item_collected"):
        res = api("POST", "collect")
        if res["data"].get("fragments_collected") is not None:
            fragments_count = res["data"]["fragments_collected"]
            ftype = res["data"].get("fragment_type", "?")
            print(f"  Collected {ftype} at room {room_id} ({fragments_count}/12)")

    # Separate exit room from normal rooms
    normal_dirs, exit_dirs = [], []
    for d in exits:
        dr, dc = DELTA[d]
        nb = (room_id // COLS + dr) * COLS + (room_id % COLS + dc)
        if nb < 0 or nb >= TOTAL:
            continue
        if exit_room is not None and nb == exit_room:
            exit_dirs.append(d)
        else:
            normal_dirs.append(d)

    # Explore normal rooms first
    for d in normal_dirs:
        if moves_used >= MOVE_LIMIT - 30:
            break
        dr, dc = DELTA[d]
        nb = (room_id // COLS + dr) * COLS + (room_id % COLS + dc)
        if nb in visited:
            continue
        nxt = move_dir(d)
        if not nxt:
            visited[nb] = {"exits": []}
            continue
        if nxt.get("is_exit_room"):
            exit_room = nxt["room_id"]
            visited[exit_room] = nxt
            print(f"  Exit room {exit_room} found - saving for last")
            move_dir(OPPOSITE[d])
            continue
        explore(nb, nxt)
        move_dir(OPPOSITE[d])

    # Enter exit room last
    for d in exit_dirs:
        if current_room != exit_room:
            nxt = move_dir(d)
            if nxt:
                visited[exit_room] = nxt


# ── BFS TO EXIT ───────────────────────────────────────────────

def navigate_to_exit():
    global current_room
    if exit_room is None:
        print("Exit room never found!")
        return False
    if current_room == exit_room:
        return True
    print(f"\nBFS navigating to exit room {exit_room}...")
    queue = [(current_room, [])]
    seen = {current_room}
    while queue:
        room, path = queue.pop(0)
        for d in (visited.get(room) or {}).get("exits", []):
            dr, dc = DELTA[d]
            nb = (room // COLS + dr) * COLS + (room % COLS + dc)
            if nb == exit_room:
                full_path = path + [d]
                for step in full_path:
                    if not move_dir(step):
                        print(f"Step {step} failed!")
                        return False
                print(f"  Reached exit room {exit_room}!")
                return True
            if nb not in seen and nb in visited:
                seen.add(nb)
                queue.append((nb, path + [d]))
    print("No path to exit found!")
    return False


# ── ANALYTICS ─────────────────────────────────────────────────

def compute_answer(question, fragments):
    text = question["text"].lower()
    cols = question.get("columns_hint") or []
    c1 = cols[0] if len(cols) > 0 else None
    c2 = cols[1] if len(cols) > 1 else None

    print(f"\nQuestion: {question['text']}")
    print(f"   Columns: {', '.join(cols)}")

    clean = [f for f in fragments if all(v != "CORRUPT" for v in f["data"].values())]
    print(f"   Total fragments: {len(fragments)}, Clean: {len(clean)}")
    for f in clean:
        print(f"   {json.dumps(f['data'])}")

    if not clean:
        print("No clean fragments!")
        return None

    v1 = [float(f["data"][c1]) for f in clean]
    v2 = [float(f["data"][c2]) for f in clean] if c2 else []

    def r2(n):
        return round(n * 100) / 100

    def mean(a):
        return sum(a) / len(a)

    def std(a):
        m = mean(a)
        return math.sqrt(sum((x - m) ** 2 for x in a) / len(a))

    def median(a):
        s = sorted(a)
        m = len(s) // 2
        return s[m] if len(s) % 2 else (s[m - 1] + s[m]) / 2

    def pct(a, p):
        s = sorted(a)
        return s[math.ceil(len(s) * p / 100) - 1]

    def pearson(x, y):
        mx, my = mean(x), mean(y)
        num = sum((xi - mx) * (y[i] - my) for i, xi in enumerate(x))
        denom = math.sqrt(sum((xi - mx) ** 2 for xi in x)) * math.sqrt(sum((yi - my) ** 2 for yi in y))
        return num / denom

    if "weighted mean" in text or "weighted average" in text:
        num = sum(float(f["data"][c1]) * float(f["data"][c2]) for f in clean)
        den = sum(float(f["data"][c2]) for f in clean)
        wm = num / den
        print(f"   Weighted mean: {num} / {den} = {wm} -> {r2(wm)}")
        return r2(wm)

    if "pearson" in text or "correlation" in text:
        return r2(pearson(v1, v2))

    if "spearman" in text:
        def rank(arr):
            s = sorted(arr)
            return [s.index(v) + 1 for v in arr]
        return r2(pearson(rank(v1), rank(v2)))

    if "slope" in text or "linear regression" in text:
        mx, my = mean(v1), mean(v2)
        slope = sum((xi - mx) * (v2[i] - my) for i, xi in enumerate(v1)) / sum((xi - mx) ** 2 for xi in v1)
        return r2(slope)

    if "intercept" in text:
        mx, my = mean(v1), mean(v2)
        slope = sum((xi - mx) * (v2[i] - my) for i, xi in enumerate(v1)) / sum((xi - mx) ** 2 for xi in v1)
        return r2(my - slope * mx)

    if "coefficient of variation" in text:
        return r2(std(v1) / mean(v1))

    import re
    if "percentile" in text and ("greater" in text or "above" in text):
        m = re.search(r"(\d+)(st|nd|rd|th)\s+percentile", text)
        p = int(m.group(1)) if m else 75
        return len([v for v in v1 if v > pct(v1, p)])

    if "percentile" in text and ("less" in text or "below" in text):
        m = re.search(r"(\d+)(st|nd|rd|th)\s+percentile", text)
        p = int(m.group(1)) if m else 25
        return len([v for v in v1 if v < pct(v1, p)])

    if "percentile" in text:
        m = re.search(r"(\d+)(st|nd|rd|th)\s+percentile", text)
        p = int(m.group(1)) if m else 50
        return pct(v1, p)

    if "interquartile" in text or "iqr" in text:
        return pct(v1, 75) - pct(v1, 25)

    if "mean" in text or "average" in text:
        return r2(mean(v1))

    if "median" in text:
        return median(v1)

    if "standard deviation" in text or "std dev" in text:
        return r2(std(v1))

    if "variance" in text:
        return r2(std(v1) ** 2)

    if "range" in text:
        return max(v1) - min(v1)

    if "maximum" in text or "max" in text:
        return max(v1)

    if "minimum" in text or "min" in text:
        return min(v1)

    if "sum" in text or "total" in text:
        return r2(sum(v1))

    if "unique" in text or "distinct" in text:
        return len(set(v1))

    if "ratio" in text:
        return r2(mean(v1) / mean(v2))

    if "count" in text or "how many" in text:
        return len(clean)

    if "mode" in text:
        from collections import Counter
        return float(Counter(v1).most_common(1)[0][0])

    print("UNKNOWN QUESTION TYPE - manual computation needed!")
    print("Fragments:", json.dumps([f["data"] for f in clean], indent=2))
    return None


# ── MAIN ─────────────────────────────────────────────────────

def main():
    global current_room

    print("=" * 60)
    print("  Data Labyrinth — Auto Solver (Python)")
    print("=" * 60)

    start_data = start_game()
    if not start_data:
        return

    # Probe initial exits
    start_exits = []
    for d in ["north", "south", "east", "west"]:
        nd = move_dir(d)
        if nd:
            start_exits.append(d)
            move_dir(OPPOSITE[d])

    print(f"\nExploring maze from room {current_room}...")
    explore(start_data["current_room"], {
        "room_id": start_data["current_room"],
        "exits": start_exits,
        "has_item": False,
        "item_collected": False,
        "is_exit_room": False,
    })

    print(f"\nExploration done! Rooms: {len(visited)}/{TOTAL}, Fragments: {fragments_count}/12, Exit: {exit_room}")

    at_exit = navigate_to_exit()
    if not at_exit:
        print(f"Could not reach exit! Session: {SESSION_TOKEN}")
        return

    print("\nFetching inventory...")
    inv_res = api("GET", "inventory")
    if not inv_res["ok"]:
        print("Inventory failed:", inv_res["data"])
        return

    all_fragments = inv_res["data"].get("fragments", [])
    required_fragments = [f for f in all_fragments if f.get("type") == "required"]
    print(f"   Total: {len(all_fragments)}, Required: {len(required_fragments)}")

    answer = compute_answer(QUESTION, required_fragments)
    if answer is None:
        print("Could not compute answer!")
        print(f"Manual submit via curl:")
        print(f'  curl -X POST {BASE}/submit -H "content-type: application/json" -H "x-session-token: {SESSION_TOKEN}" -d \'{{"answer": YOUR_ANSWER}}\'')
        return

    print(f"\nSubmitting answer: {answer}")
    result = api("POST", "submit", {"answer": answer})
    print("Response:", json.dumps(result["data"], indent=2))

    if result["data"].get("completion_token"):
        jwt = result["data"]["completion_token"]
        print("\n" + "=" * 60)
        print("SUCCESS!")
        print(f"Score: {result['data'].get('score')}, Moves: {result['data'].get('moves_used')}")
        print("\nJWT TOKEN:")
        print(jwt)
        print("=" * 60)
        pathlib.Path("jwt_token.txt").write_text(jwt, encoding="utf-8")
        print("\nJWT saved to jwt_token.txt")

    elif result["data"].get("error") == "wrong_answer":
        print(f"Wrong answer! Attempts remaining: {result['data'].get('attempts_remaining')}")
        print(f"Session: {SESSION_TOKEN}")
        print("Fragments:", json.dumps([f["data"] for f in required_fragments], indent=2))

    else:
        print("Unexpected response:", jsons.dumps(result["data"]))
        print(f"Session: {SESSION_TOKEN}")


if __name__ == "__main__":
    main()
