"""
Graph Detective Game Solver
Strategy: BFS with anomaly scoring to find compromised node within query budget.
Clues indicate: rare but massive tx, mostly outbound, few counterparties, high volume.
"""
import json
import urllib.request
import urllib.error
from collections import deque

BASE_URL = "https://tds-network-games.sanand.workers.dev/detective"
EMAIL = "23f3003225@ds.study.iitm.ac.in"

session_token = None


def api(method, path, body=None):
    url = f"{BASE_URL}{path}"
    data = json.dumps(body).encode() if body else None
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://tds-network-games.sanand.workers.dev",
        "Referer": "https://tds-network-games.sanand.workers.dev/detective/",
    }
    if session_token:
        headers["X-Session-Token"] = session_token
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        err_body = e.read()
        print(f"HTTP Error {e.code}: {err_body.decode()}")
        return None


def anomaly_score(attrs):
    """
    Score how anomalous a node's attributes are based on clues.
    Higher score = more suspicious.
    """
    score = 0.0
    tx_vol = attrs.get("tx_volume_daily", 0)
    tx_count = attrs.get("tx_count_daily", 10)
    in_out = attrs.get("in_out_ratio", 1.0)
    cp_count = attrs.get("counterparty_count", 5)
    avg_size = attrs.get("avg_tx_size", 100)
    dormancy = attrs.get("dormancy_days", 5)

    # Low tx_count (rare transactions)
    if tx_count <= 2:
        score += 4
    elif tx_count <= 3:
        score += 3
    elif tx_count <= 5:
        score += 1

    # High avg_tx_size (massive individual transactions)
    if avg_size > 10000:
        score += 5
    elif avg_size > 5000:
        score += 4
    elif avg_size > 2000:
        score += 2
    elif avg_size > 1000:
        score += 1

    # Extreme in_out_ratio (almost never receives / mostly outbound)
    if in_out < 0.05 or in_out > 20:
        score += 5
    elif in_out < 0.1 or in_out > 10:
        score += 4
    elif in_out < 0.2 or in_out > 5:
        score += 3
    elif in_out < 0.3 or in_out > 3:
        score += 2

    # Low counterparty_count with high volume
    if cp_count <= 1:
        score += 4
    elif cp_count <= 2:
        score += 3
    elif cp_count <= 3:
        score += 1

    # High tx_volume_daily
    if tx_vol > 100000:
        score += 5
    elif tx_vol > 50000:
        score += 4
    elif tx_vol > 20000:
        score += 3
    elif tx_vol > 10000:
        score += 2
    elif tx_vol > 5000:
        score += 1

    # High dormancy
    if dormancy > 30:
        score += 2
    elif dormancy > 20:
        score += 1

    return score


def bfs_path(explored, start, end):
    """Find shortest path using ALL known graph structure (not just explored nodes)."""
    # Build full adjacency from explored nodes' neighbor lists
    # Include edges even if the neighbor wasn't queried
    adj = {}
    for nid, data in explored.items():
        if nid not in adj:
            adj[nid] = set()
        for neighbor in data.get("neighbors", []):
            adj[nid].add(neighbor)
            # Add reverse edge too
            if neighbor not in adj:
                adj[neighbor] = set()
            adj[neighbor].add(nid)

    queue = deque([(start, [start])])
    visited = {start}
    while queue:
        node, path = queue.popleft()
        if node == end:
            return path
        for neighbor in adj.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None


def solve():
    global session_token

    # Start the game
    resp = api("POST", "/start", {"email": EMAIL})
    if not resp:
        print("Failed to start game!")
        return None

    print("=== GAME STARTED ===")
    session_token = resp["session_token"]
    anchor = resp["anchor_node"]
    clues = resp.get("clues", [])
    max_queries = resp.get("max_queries", 55)
    queries_used = resp.get("queries_used", 0)

    print(f"Anchor: node {anchor['id']}, degree={anchor['degree']}")
    print(f"Anchor attrs: {anchor['attributes']}")
    print(f"Clues: {clues}")
    print(f"Max queries: {max_queries}")
    print(f"Graph: {resp.get('graph_info', {})}")

    # Track explored nodes
    explored = {}
    explored[anchor["id"]] = {
        "id": anchor["id"],
        "attributes": anchor.get("attributes", {}),
        "neighbors": anchor.get("neighbors", []),
        "degree": anchor.get("degree"),
        "neighbor_degrees": {},
    }

    # BFS parent tracking
    parent = {anchor["id"]: None}

    # Known degrees from neighbor_degrees (learned without querying)
    known_degrees = {}

    # Frontier: nodes to explore
    frontier = set()
    for n in anchor.get("neighbors", []):
        if n not in explored:
            frontier.add(n)
            parent[n] = anchor["id"]

    best_candidate = None
    best_score = -1

    # Check anchor node score
    anchor_score = anomaly_score(anchor["attributes"])
    print(f"Anchor anomaly score: {anchor_score}")
    if anchor_score > best_score:
        best_score = anchor_score
        best_candidate = anchor["id"]

    print("\n=== EXPLORING ===")
    while frontier and queries_used < max_queries - 2:
        # Prioritize: prefer nodes with lowest known degree (likely anomalous)
        # then prefer unknown-degree nodes
        def priority(nid):
            if nid in known_degrees:
                return known_degrees[nid]
            return 999  # Unknown, explore last unless nothing else

        node_id = min(frontier, key=priority)
        frontier.remove(node_id)

        if node_id in explored:
            continue

        # Query this node
        resp = api("GET", f"/node/{node_id}")
        if not resp:
            continue

        queries_used = resp.get("queries_used", queries_used + 1)

        explored[node_id] = {
            "id": resp["id"],
            "attributes": resp.get("attributes", {}),
            "neighbors": resp.get("neighbors", []),
            "degree": resp.get("degree"),
            "neighbor_degrees": resp.get("neighbor_degrees", {}),
        }

        # Update known_degrees from neighbor_degrees
        for nid_str, deg in resp.get("neighbor_degrees", {}).items():
            known_degrees[int(nid_str)] = deg

        attrs = resp.get("attributes", {})
        score = anomaly_score(attrs)

        print(
            f"Node {node_id:3d}: deg={resp.get('degree'):2d}, "
            f"score={score:5.1f}, "
            f"vol={attrs.get('tx_volume_daily'):6d}, "
            f"cnt={attrs.get('tx_count_daily'):2d}, "
            f"io={attrs.get('in_out_ratio'):5.2f}, "
            f"cp={attrs.get('counterparty_count'):2d}, "
            f"avg={attrs.get('avg_tx_size'):6d}, "
            f"q={queries_used}/{max_queries}"
        )

        if score > best_score:
            best_score = score
            best_candidate = node_id
            print(f"  ** NEW BEST: node {node_id} score={score}")

        if score >= 15:
            print(f"\n*** FOUND COMPROMISED: Node {node_id} (score={score}) ***")
            break

        # Add new neighbors to frontier
        for neighbor in resp.get("neighbors", []):
            if neighbor not in explored and neighbor not in frontier:
                frontier.add(neighbor)
                if neighbor not in parent:
                    parent[neighbor] = node_id

    # Final analysis
    print(f"\n=== ANALYSIS ===")
    print(f"Explored {len(explored)} nodes, used {queries_used} queries")
    print(f"Best candidate: node {best_candidate} score={best_score}")

    scored_nodes = []
    for nid, data in explored.items():
        s = anomaly_score(data["attributes"])
        scored_nodes.append((nid, s, data["attributes"]))
    scored_nodes.sort(key=lambda x: -x[1])

    print("\nTop 10 suspicious nodes:")
    for nid, s, attrs in scored_nodes[:10]:
        print(f"  Node {nid}: score={s:.1f}, {attrs}")

    compromised = best_candidate
    if compromised is None:
        print("\nERROR: Could not identify compromised node.")
        return None

    # Find shortest path using BFS on full known graph
    path = bfs_path(explored, anchor["id"], compromised)
    if not path:
        print("ERROR: Cannot find path!")
        return None

    print(f"\nPath: {path} (length {len(path)})")

    # Submit
    print(f"\n=== SUBMITTING ===")
    result = api("POST", "/submit", {
        "compromised_node": compromised,
        "path": path,
    })
    print(f"\nResult: {json.dumps(result, indent=2)}")

    if result and result.get("token"):
        print(f"\n{'='*60}")
        print("JWT TOKEN:")
        print(f"{'='*60}")
        print(result["token"])
        print(f"{'='*60}")

    return result


if __name__ == "__main__":
    result = solve()
