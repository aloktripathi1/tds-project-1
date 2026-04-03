# Q9: Network Game - Data Labyrinth

## Task

Complete the Data Labyrinth challenge and submit the JWT completion token.

---

## Approach

This solution uses `solve.py` to automate the entire flow:

1. Start a new game session.
2. Explore the maze and collect required fragments.
3. Filter corrupt entries and compute the numeric answer.
4. Submit the answer automatically.
5. Save the completion JWT to `jwt_token.txt`.

---

## Setup

Before running, update the email in `solve.py`:

```python
EMAIL = "your_student_email@ds.study.iitm.ac.in"
```

Replace it with your own IITM student email.

---

## How to Run

```bash
cd q9
python solve.py
```

If successful, the script prints the completion token and writes it to `jwt_token.txt`.

---

## Submission

Submit the completion token generated for your own run.

```
<JWT completion token from your solver output>
```
