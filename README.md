# Project 1 (TDS Jan 2026)

This repository contains my Project-1 solutions and helper scripts.

## Overview

- q1: Secret Agent Password Exchange
- q2: Audio Digit Transcription
- q3: Open-Source PR Proof
- q4: CommonMark Parser
- q5 to q8: Additional submission artifacts
- q9: Network Game - Data Labyrinth
- q10: Network Game - Graph Detective
- q11: Network Game - The Signal

Question readme links:
- [q1/README.md](q1/README.md)
- [q2/README.md](q2/README.md)
- [q3/README.md](q3/README.md)
- [q4/README.md](q4/README.md)
- [q9/README.md](q9/README.md)
- [q10/README.md](q10/README.md)
- [q11/README.md](q11/README.md)

## Setup

- Python 3.10+
- Node.js 18+

Q2 dependency:

```bash
pip install groq
```

API key (PowerShell):

```powershell
$env:GROQ_API_KEY = "your_groq_api_key_here"
```

## Run Commands

### Q1
```bash
cd q1
python generate_password_json.py 058 012 015
```

### Q2
```bash
cd q2
python solve_challenge.py <TARGET_HASH>
```

### Q3
PR proof:
https://github.com/firstcontributions/first-contributions/pull/111611

### Q9
```bash
cd q9
node labyrinth_solver.js
```

### Q10
```bash
cd q10
python solve.py
```

### Q11
```bash
cd q11
python solve.py
```

## Notes

- Do not commit secrets.
- Use question README files for exact submission format.
