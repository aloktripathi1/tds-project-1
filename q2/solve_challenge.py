"""
TDS Project 1 Q2 Solver - Dynamic Audio Transcription

This script robustly transcribes a 300-digit number from `audio.mp3` and verifies it against a provided SHA256 hash.
It uses Groq Whisper for transcription and includes advanced repair logic to fix common transcription errors.

USAGE:
    python solve_challenge.py <TARGET_HASH>

    Example:
    python solve_challenge.py a843290afead5b7bff998e147c0a69dc8f2a9665101b97310a4ad55ad1680323
"""

import hashlib
import json
import os
import re
import sys
from groq import Groq

# ── CONFIGURATION & CONSTANTS ───────────────────────────
AUDIO_FILE = "audio.mp3"
EXPECTED_DIGITS = 300

# Word-to-digit mapping for robustness
WORD_MAP = {
    "zero": "0", "oh": "0", "o": "0",
    "one": "1", "won": "1",
    "two": "2", "to": "2", "too": "2",
    "three": "3", "tree": "3",
    "four": "4", "for": "4", "fore": "4",
    "five": "5", "six": "6",
    "seven": "7", "eight": "8", "ate": "8",
    "nine": "9", "niner": "9",
}

# ── CORE FUNCTIONS ──────────────────────────────────────

def verify(number: str, target_hash: str) -> bool:
    """Check if the SHA256 hash of the number matches the target."""
    return hashlib.sha256(number.encode()).hexdigest() == target_hash

def extract_digits(raw_text: str) -> str:
    """Convert transcription text to digit string."""
    text = raw_text.lower().strip()

    # Try extracting bare digit characters first
    raw_digits = re.findall(r"\d", text)
    # If we have enough raw digits, prefer them as they are usually more accurate
    if len(raw_digits) >= EXPECTED_DIGITS - 10:
         return "".join(raw_digits)

    # Fallback: convert word-form tokens
    digits = []
    for tok in re.split(r"[\s,.\-;:]+", text):
        tok = tok.strip().lower()
        if not tok:
            continue
        if tok.isdigit() or all(c.isdigit() for c in tok):
            digits.extend(list(tok) if len(tok) > 1 else [tok])
        elif tok in WORD_MAP:
            digits.append(WORD_MAP[tok])
    return "".join(digits)

def repair_digits(digits: str, target_hash: str) -> str | None:
    """Attempt to repair the digit string to match the hash."""
    if verify(digits, target_hash):
        return digits
    
    diff = len(digits) - EXPECTED_DIGITS
    print(f"   Repairing: Length is {len(digits)} (Diff: {diff})")

    # 1. Single Substitution (fixes 1 incorrect digit)
    if diff == 0:
        print("   Checking single substitutions...")
        for i in range(len(digits)):
            original = digits[i]
            for d in "0123456789":
                if d == original: continue
                candidate = digits[:i] + d + digits[i+1:]
                if verify(candidate, target_hash):
                    print(f"   MATCH! Substituted index {i} ('{original}' -> '{d}')")
                    return candidate

    # 2. Key Repair Strategies based on length diff
    
    if diff == 1:
        print("   Checking single deletions...")
        for i in range(len(digits)):
            candidate = digits[:i] + digits[i+1:]
            if verify(candidate, target_hash):
                print(f"   MATCH! Deleted index {i} ('{digits[i]}')")
                return candidate

    elif diff == -1:
        print("   Checking single insertions...")
        for i in range(len(digits) + 1):
            for d in "0123456789":
                candidate = digits[:i] + d + digits[i:]
                if verify(candidate, target_hash):
                    print(f"   MATCH! Inserted '{d}' at index {i}")
                    return candidate

    elif diff == 2:
        print("   Checking double deletions...") # This can be slow-ish but fine for length 300
        for i in range(len(digits)):
            for j in range(i + 1, len(digits)):
                candidate = digits[:i] + digits[i+1:j] + digits[j+1:]
                if verify(candidate, target_hash):
                    print(f"   MATCH! Deleted indices {i} and {j}")
                    return candidate

    # 3. Advanced Repairs (Swaps & Mixed Operations) - Run if length is correct or close
    if abs(diff) <= 2:
        print("   Checking adjacent swaps...")
        for i in range(len(digits) - 1):
            temp = list(digits)
            temp[i], temp[i+1] = temp[i+1], temp[i]
            candidate = "".join(temp)
            if verify(candidate, target_hash):
                print(f"   MATCH! Swapped adjacent digits at {i}")
                return candidate
        
        print("   Checking distance-1 swaps...")
        for i in range(len(digits) - 2):
            temp = list(digits)
            temp[i], temp[i+2] = temp[i+2], temp[i]
            candidate = "".join(temp)
            if verify(candidate, target_hash):
                print(f"   MATCH! Swapped digits at {i} and {i+2}")
                return candidate
        
        # This was the successful strategy for the last challenge!
        print("   Checking Delete(i) + Insert(j, d) (complex valid move)...")
        # Optimization: iterating full grid is ~900k checks, very fast in Python
        for i in range(len(digits)):
            # Remove at i
            base = digits[:i] + digits[i+1:]
            for j in range(len(base) + 1):
                for d in "0123456789":
                    candidate = base[:j] + d + base[j:]
                    if verify(candidate, target_hash):
                        print(f"   MATCH! Deleted at {i}, Inserted '{d}' at {j}")
                        return candidate
    
    # 4. Double substitution (Computationally expensive: ~4.5M checks)
    if diff == 0:
        print("   Checking double substitutions (this may take ~30s)...")
        chars = list(digits)
        n = len(chars)
        for i in range(n):
            orig_i = chars[i]
            for j in range(i + 1, n):
                orig_j = chars[j]
                
                # Check 0-9 for first digit
                for d1 in "0123456789":
                    if d1 == orig_i: continue
                    chars[i] = d1
                    
                    # Check 0-9 for second digit
                    for d2 in "0123456789":
                        if d2 == orig_j: continue
                        chars[j] = d2
                        
                        if verify("".join(chars), target_hash):
                            print(f"   MATCH! Double sub at {i} and {j}")
                            return "".join(chars)
                    chars[j] = orig_j # Restore j
            chars[i] = orig_i # Restore i

    return None

def transcribe_and_solve(target_hash: str):
    if not os.path.exists(AUDIO_FILE):
        print(f"Error: {AUDIO_FILE} not found.")
        print("Please download the audio file from the exam page and save it as 'audio.mp3' in this directory.")
        return

    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        print("Error: GROQ_API_KEY environment variable not set.")
        return
    client = Groq(api_key=api_key)

    strategies = [
        # (Name, Temperature, Prompt)
        ("Strategy 1 (T=0, digits prompt)", 0.0, "0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9"),
        ("Strategy 2 (T=0, simple prompt)", 0.0, "Spoken digits from 0 to 9"), 
        ("Strategy 3 (T=0.1, digits prompt)", 0.1, "0 1 2 3 4 5 6 7 8 9"),
        ("Strategy 4 (T=0, strict)", 0.0, "0123456789"),
    ]

    best_candidate = ""
    min_diff = 999

    for name, temp, prompt in strategies:
        print(f"\nRunning {name}...")
        try:
            with open(AUDIO_FILE, "rb") as f:
                transcription = client.audio.transcriptions.create(
                    file=(AUDIO_FILE, f.read()),
                    model="whisper-large-v3",
                    language="en",
                    temperature=temp,
                    prompt=prompt,
                    response_format="text",
                )
            
            digits = extract_digits(str(transcription))
            print(f"   Extracted {len(digits)} digits")
            
            if verify(digits, target_hash):
                print("\nPERFECTION! Exact match found.")
                save_submission(digits, target_hash)
                return

            # Attempt repair
            repaired = repair_digits(digits, target_hash)
            if repaired:
                print("\nREPAIR SUCCESSFUL!")
                save_submission(repaired, target_hash)
                return
            
            # Keep best candidate
            diff = abs(len(digits) - EXPECTED_DIGITS)
            if diff < min_diff:
                min_diff = diff
                best_candidate = digits
                
        except Exception as e:
            print(f"   Error: {e}")

    print("\nNo exact match found even after repairs.")
    print("Saving best candidate...")
    save_submission(best_candidate, target_hash)

def save_submission(digits, target_hash):
    submission = {"number": digits, "hash": target_hash}
    with open("submission.json", "w") as f:
        json.dump(submission, f, indent=2)
    print("\n" + json.dumps(submission, indent=2))
    print(f"\nSaved to: submission.json")

def main():
    print("="*60)
    print("TDS PROJECT 1 Q2 SOLVER")
    print("="*60)

    if len(sys.argv) < 2:
        print("\nUsage: python solve_challenge.py <TARGET_HASH>")
        print("Please provide the target SHA256 hash as an argument.")
        return

    target_hash = sys.argv[1].strip()
    if not re.fullmatch(r"[0-9a-fA-F]{64}", target_hash):
        print("Error: TARGET_HASH must be a 64-character SHA256 hex string.")
        return

    print(f"Target Hash: {target_hash}")
    
    transcribe_and_solve(target_hash)

if __name__ == "__main__":
    main()
