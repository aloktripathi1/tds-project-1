// ============================================================
//  Data Labyrinth — Improved Auto Solver v8 (Node.js)
//
//  HOW TO USE:
//  node labyrinth_solver.js
//  JWT will be saved to jwt_token.txt automatically
// ============================================================

const fs = require('fs');

const EMAIL = '2XfX00XXXX@ds.study.iitm.ac.in';
const BASE = 'https://tds-network-games.sanand.workers.dev/labyrinth';
const COLS = 11;
const TOTAL = 121;
const MOVE_LIMIT = 600;
const OPPOSITE = { north: 'south', south: 'north', east: 'west', west: 'east' };
const DELTA = { north: [-1, 0], south: [1, 0], east: [0, 1], west: [0, -1] };

let SESSION_TOKEN = null;
let QUESTION = null;
let currentRoom = null;
let exitRoom = null;
let movesUsed = 0;
let fragmentsCount = 0;
const visited = {};
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── API ───────────────────────────────────────────────────────
async function api(method, endpoint, body) {
  const h = { 'content-type': 'application/json' };
  if (SESSION_TOKEN) h['x-session-token'] = SESSION_TOKEN;
  const opts = { method, headers: h };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const r = await fetch(`${BASE}/${endpoint}`, opts);
  const data = await r.json();
  return { ok: r.ok, status: r.status, data };
}

async function moveDir(dir) {
  if (movesUsed >= MOVE_LIMIT - 30) return null;
  const res = await api('POST', 'move', { direction: dir });
  await sleep(300);
  if (!res.ok || !res.data.success) return null;
  movesUsed = res.data.moves_used || movesUsed + 1;
  currentRoom = res.data.room_id;
  if (res.data.is_exit_room && exitRoom === null) {
    exitRoom = res.data.room_id;
    console.log(`  🚪 Exit room detected: ${exitRoom}`);
  }
  return res.data;
}

// ── START GAME ────────────────────────────────────────────────
async function startGame() {
  console.log('\n🚀 Starting game...');
  const res = await api('POST', 'start', { email: EMAIL });
  if (!res.ok || !res.data.session_token) {
    console.error('Failed:', JSON.stringify(res.data));
    return null;
  }
  const d = res.data;
  if (d.status === 'completed') {
    console.error('❌ Session already completed for this week! Wait for next week.');
    console.log(`   Week: ${d.week_id}, Moves: ${d.moves_used}, Status: ${d.status}`);
    return null;
  }
  SESSION_TOKEN = d.session_token;
  QUESTION = d.question;
  currentRoom = d.current_room;
  movesUsed = d.moves_used || 0;
  fragmentsCount = d.fragments_collected || 0;
  console.log(`   Email   : ${EMAIL}`);
  console.log(`   Session : ${SESSION_TOKEN}`);
  console.log(`   Week    : ${d.week_id}`);
  console.log(`   Room    : ${d.current_room}`);
  console.log(`   Question: [${QUESTION.id}] ${QUESTION.text}`);
  console.log(`   Columns : ${QUESTION.columns_hint?.join(', ')}`);
  console.log(`   Moves   : ${movesUsed}/${MOVE_LIMIT} | Fragments: ${fragmentsCount}/12`);
  return d;
}

// ── DFS ───────────────────────────────────────────────────────
async function explore(roomId, roomData) {
  if (!roomData) return;
  visited[roomId] = roomData;
  const exits = roomData.exits || [];
  if (roomData.is_exit_room && exitRoom === null) exitRoom = roomId;

  // Collect items
  if (roomData.has_item && !roomData.item_collected) {
    const res = await api('POST', 'collect');
    if (res.data?.fragments_collected !== undefined) {
      fragmentsCount = res.data.fragments_collected;
      const ftype = res.data.fragment_type || '?';
      console.log(`  📦 Collected ${ftype} at room ${roomId} (${fragmentsCount}/12)`);
    }
  }

  // Separate exit room from normal rooms
  const normalDirs = [], exitDirs = [];
  for (const dir of exits) {
    const [dr, dc] = DELTA[dir];
    const nb = (Math.floor(roomId / COLS) + dr) * COLS + (roomId % COLS + dc);
    if (nb < 0 || nb >= TOTAL) continue;
    if (exitRoom !== null && nb === exitRoom) exitDirs.push(dir);
    else normalDirs.push(dir);
  }

  // Explore normal rooms first
  for (const dir of normalDirs) {
    if (movesUsed >= MOVE_LIMIT - 30) break;
    const [dr, dc] = DELTA[dir];
    const nb = (Math.floor(roomId / COLS) + dr) * COLS + (roomId % COLS + dc);
    if (visited[nb]) continue;
    const next = await moveDir(dir);
    if (!next) { visited[nb] = { exits: [] }; continue; }
    if (next.is_exit_room) {
      exitRoom = next.room_id;
      visited[exitRoom] = next;
      console.log(`  🚪 Exit room ${exitRoom} found - saving for last`);
      await moveDir(OPPOSITE[dir]);
      continue;
    }
    await explore(nb, next);
    await moveDir(OPPOSITE[dir]);
  }

  // Enter exit room last
  for (const dir of exitDirs) {
    if (currentRoom !== exitRoom) {
      const next = await moveDir(dir);
      if (next) visited[exitRoom] = next;
    }
  }
}

// ── BFS TO EXIT ───────────────────────────────────────────────
async function navigateToExit() {
  if (exitRoom === null) { console.error('Exit room never found!'); return false; }
  if (currentRoom === exitRoom) return true;
  console.log(`\n🧭 BFS navigating to exit room ${exitRoom}...`);
  const queue = [[currentRoom, []]];
  const seen = new Set([currentRoom]);
  while (queue.length) {
    const [room, path] = queue.shift();
    for (const dir of (visited[room]?.exits || [])) {
      const [dr, dc] = DELTA[dir];
      const nb = (Math.floor(room / COLS) + dr) * COLS + (room % COLS + dc);
      if (nb === exitRoom) {
        const fullPath = [...path, dir];
        for (const d of fullPath) {
          if (!await moveDir(d)) { console.error(`Step ${d} failed!`); return false; }
        }
        console.log(`  ✅ Reached exit room ${exitRoom}!`);
        return true;
      }
      if (!seen.has(nb) && visited[nb]) { seen.add(nb); queue.push([nb, [...path, dir]]); }
    }
  }
  console.error('No path to exit found!');
  return false;
}

// ── ANALYTICS ─────────────────────────────────────────────────
function computeAnswer(question, fragments) {
  const text = question.text.toLowerCase();
  const cols = question.columns_hint || [];
  const c1 = cols[0], c2 = cols[1];

  console.log(`\n📊 Question: ${question.text}`);
  console.log(`   Columns: ${cols.join(', ')}`);

  // "Exclude any incomplete records" = exclude records with ANY CORRUPT field
  const clean = fragments.filter(f => {
    return Object.values(f.data).every(v => v !== 'CORRUPT');
  });
  console.log(`   Total fragments: ${fragments.length}, Clean: ${clean.length}`);
  clean.forEach(f => console.log(`   ${JSON.stringify(f.data)}`));

  if (clean.length === 0) { console.error('No clean fragments!'); return null; }

  const v1 = clean.map(f => Number(f.data[c1]));
  const v2 = c2 ? clean.map(f => Number(f.data[c2])) : [];
  const r2 = n => Math.round(n * 100) / 100;
  const mean = a => a.reduce((s, x) => s + x, 0) / a.length;
  const std = a => { const m = mean(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / a.length); };
  const median = a => { const s = [...a].sort((x, y) => x - y), m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
  const pct = (a, p) => { const s = [...a].sort((x, y) => x - y); return s[Math.ceil(s.length * p / 100) - 1]; };
  const pearson = (x, y) => {
    const mx = mean(x), my = mean(y);
    const num = x.reduce((s, xi, i) => s + (xi - mx) * (y[i] - my), 0);
    return num / (Math.sqrt(x.reduce((s, xi) => s + (xi - mx) ** 2, 0)) * Math.sqrt(y.reduce((s, yi) => s + (yi - my) ** 2, 0)));
  };

  // Weighted mean
  if (text.includes('weighted mean') || text.includes('weighted average')) {
    // c1 = value column, c2 = weight column
    const num = clean.reduce((s, f) => s + Number(f.data[c1]) * Number(f.data[c2]), 0);
    const den = clean.reduce((s, f) => s + Number(f.data[c2]), 0);
    const wm = num / den;
    console.log(`   Weighted mean: ${num} / ${den} = ${wm} → ${r2(wm)}`);
    return r2(wm);
  }

  if (text.includes('pearson') || text.includes('correlation'))
    return r2(pearson(v1, v2));

  if (text.includes('spearman')) {
    const rank = arr => { const s = [...arr].sort((a, b) => a - b); return arr.map(v => s.indexOf(v) + 1); };
    return r2(pearson(rank(v1), rank(v2)));
  }

  if (text.includes('slope') || text.includes('linear regression')) {
    const mx = mean(v1), my = mean(v2);
    const slope = v1.reduce((s, xi, i) => s + (xi - mx) * (v2[i] - my), 0) / v1.reduce((s, xi) => s + (xi - mx) ** 2, 0);
    return r2(slope);
  }

  if (text.includes('intercept')) {
    const mx = mean(v1), my = mean(v2);
    const slope = v1.reduce((s, xi, i) => s + (xi - mx) * (v2[i] - my), 0) / v1.reduce((s, xi) => s + (xi - mx) ** 2, 0);
    return r2(my - slope * mx);
  }

  if (text.includes('coefficient of variation')) return r2(std(v1) / mean(v1));

  if (text.includes('percentile') && (text.includes('greater') || text.includes('above'))) {
    const m = text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p = m ? Number(m[1]) : 75;
    return v1.filter(v => v > pct(v1, p)).length;
  }

  if (text.includes('percentile') && (text.includes('less') || text.includes('below'))) {
    const m = text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p = m ? Number(m[1]) : 25;
    return v1.filter(v => v < pct(v1, p)).length;
  }

  if (text.includes('percentile')) {
    const m = text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p = m ? Number(m[1]) : 50;
    return pct(v1, p);
  }

  if (text.includes('interquartile') || text.includes('iqr')) return pct(v1, 75) - pct(v1, 25);
  if (text.includes('mean') || text.includes('average')) return r2(mean(v1));
  if (text.includes('median')) return median(v1);
  if (text.includes('standard deviation') || text.includes('std dev')) return r2(std(v1));
  if (text.includes('variance')) return r2(std(v1) ** 2);
  if (text.includes('range')) return Math.max(...v1) - Math.min(...v1);
  if (text.includes('maximum') || text.includes('max')) return Math.max(...v1);
  if (text.includes('minimum') || text.includes('min')) return Math.min(...v1);
  if (text.includes('sum') || text.includes('total')) return r2(v1.reduce((a, b) => a + b, 0));
  if (text.includes('unique') || text.includes('distinct')) return new Set(v1).size;
  if (text.includes('ratio')) return r2(mean(v1) / mean(v2));
  if (text.includes('count') || text.includes('how many')) return clean.length;

  if (text.includes('mode')) {
    const freq = {}; v1.forEach(v => freq[v] = (freq[v] || 0) + 1);
    return Number(Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]);
  }

  console.error('UNKNOWN QUESTION TYPE - manual computation needed!');
  console.log('Fragments:', JSON.stringify(clean.map(f => f.data), null, 2));
  return null;
}

// ── MAIN ─────────────────────────────────────────────────────
(async () => {
  console.log('='.repeat(60));
  console.log('  Data Labyrinth — Auto Solver v8');
  console.log('='.repeat(60));

  const startData = await startGame();
  if (!startData) return;

  // Probe initial exits
  const startExits = [];
  for (const dir of ['north', 'south', 'east', 'west']) {
    const d = await moveDir(dir);
    if (d) { startExits.push(dir); await moveDir(OPPOSITE[dir]); }
  }

  console.log(`\n🗺️  Exploring maze from room ${currentRoom}...`);
  await explore(startData.current_room, {
    room_id: startData.current_room,
    exits: startExits,
    has_item: false,
    item_collected: false,
    is_exit_room: false,
  });

  console.log(`\n✅ Exploration done! Rooms: ${Object.keys(visited).length}/${TOTAL}, Fragments: ${fragmentsCount}/12, Exit: ${exitRoom}`);

  // Navigate to exit
  const atExit = await navigateToExit();
  if (!atExit) {
    console.error('Could not reach exit! Session:', SESSION_TOKEN);
    return;
  }

  // Get inventory from API for clean data
  console.log('\n📋 Fetching inventory...');
  const invRes = await api('GET', 'inventory');
  if (!invRes.ok) { console.error('Inventory failed:', invRes.data); return; }

  const allFragments = invRes.data.fragments || [];
  const requiredFragments = allFragments.filter(f => f.type === 'required');
  console.log(`   Total: ${allFragments.length}, Required: ${requiredFragments.length}`);

  // Compute answer
  const answer = computeAnswer(QUESTION, requiredFragments);
  if (answer === null) {
    console.error('Could not compute answer!');
    console.log(`Manual submit: fetch('${BASE}/submit',{method:'POST',headers:{'content-type':'application/json','x-session-token':'${SESSION_TOKEN}'},body:JSON.stringify({answer: YOUR_ANSWER})})`);
    return;
  }

  // Submit answer
  console.log(`\n📤 Submitting answer: ${answer}`);
  const result = await api('POST', 'submit', { answer });
  console.log('Response:', JSON.stringify(result.data, null, 2));

  if (result.data.completion_token) {
    const jwt = result.data.completion_token;
    console.log('\n' + '='.repeat(60));
    console.log('🏆 SUCCESS!');
    console.log(`Score: ${result.data.score}, Moves: ${result.data.moves_used}`);
    console.log('\n📋 JWT TOKEN:');
    console.log(jwt);
    console.log('='.repeat(60));

    // Save to file!
    fs.writeFileSync('jwt_token.txt', jwt, 'utf8');
    console.log('\n💾 JWT saved to jwt_token.txt');
  } else if (result.data.error === 'wrong_answer') {
    console.error(`❌ Wrong answer! Attempts remaining: ${result.data.attempts_remaining}`);
    console.log(`Session: ${SESSION_TOKEN}`);
    console.log(`Manual submit: fetch('${BASE}/submit',{method:'POST',headers:{'content-type':'application/json','x-session-token':'${SESSION_TOKEN}'},body:JSON.stringify({answer: YOUR_ANSWER})})`);
    console.log('Fragments:', JSON.stringify(requiredFragments.map(f => f.data), null, 2));
  } else {
    console.log('Unexpected response:', JSON.stringify(result.data));
    console.log(`Session: ${SESSION_TOKEN}`);
  }
})();
