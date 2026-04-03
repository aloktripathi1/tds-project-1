# Project 1 - Tools in Data Science (Jan 2026)

This repo contains my end-to-end solutions for Project 1, organized by question with reproducible scripts and submission-ready outputs.

## What's Inside

| Folder | Focus |
|---|---|
| q1 | Secret Agent Password Exchange |
| q2 | Audio Digit Transcription |
| q3 | Open-source PR proof |
| q4 | CommonMark parsing task |
| q5-q8 | Visual artifacts and submissions |
| q9 | Network Game: Data Labyrinth |
| q10 | Network Game: Graph Detective |
| q11 | Network Game: The Signal |

## Tech Snapshot

- Languages: Python, JavaScript
- Runtime: Python 3.10+, Node.js 18+
- Key libraries: `groq` (Q2)

## Quick Start

```bash
cd project-1
python -m venv .venv
source .venv/bin/activate
pip install groq
```

PowerShell API key setup (Q2):

```powershell
$env:GROQ_API_KEY = "your_groq_api_key_here"
```

## Runbook

- Q1: [q1/README.md](q1/README.md)
- Q2: [q2/README.md](q2/README.md)
- Q3: [q3/README.md](q3/README.md)
- Q4: [q4/README.md](q4/README.md)
- Q9: [q9/README.md](q9/README.md)
- Q10: [q10/README.md](q10/README.md)
- Q11: [q11/README.md](q11/README.md)

Common commands:

```bash
# Q1
cd q1 && python generate_password_json.py 058 012 015

# Q2
cd q2 && python solve_challenge.py <TARGET_HASH>

# Q9
cd q9 && python solve.py

# Q10
cd q10 && python solve.py

# Q11
cd q11 && python solve.py
```

## Notes

- Keep secrets out of git.
- Use environment variables for tokens and API keys.
- Follow each question README for exact submission format.
