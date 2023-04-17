"""
What's the minimum number of times you have to flip a coin before you can have three consecutive flips that result in the same outcome (either all three are heads or all three are tails)? What's the maximum number of flips that might be needed? How many flips are needed on average? In this exercise we will explore these questions
by creating a program that simulates several series of coin flips.

Create a program that uses a random number generator to simulate flipping a coin several times. 
The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails. 
Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur. Display an H each time the outcome is heads, and a T each time the outcome is tails, with all of the outcomes for one simulation on the same line. 
Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome. When your program is run it should perform the simulation 10 times and report the average number of flips needed. Sample output is shown below:

```
H T T T (4 flips)
H H T T H T H T T H H T H T T H T T T (19 flips)
T T T (3 flips)
T H H H (4 flips)
H H H (3 flips)
T H T T H T H H T T H H T H T H H H (18 flips)
H T T H H H (6 flips)
T H T T T (5 flips)
T T H T T H T H T H H H (12 flips)
T H T T T (5 flips)

On average, 7.9 flips were needed.
```

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Conditionals and recursion
- Iteration
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours**

."""

from random import random

def simulation(nr_consec_occurr : int):
    """STWU."""

    if nr_consec_occurr < 0:
        print(f"richiesto numero di occorrenze non valido: {nr_consec_occurr}")
        return -1
    if nr_consec_occurr == 0:
        return 0

    results = [""] * nr_consec_occurr 
    nr_runs = 0

    while True:
        nr_runs += 1
        result = 'T' if random() < 0.5 else 'H'
        print(result, end = " ")
        results.append(result)
        results.pop(0)

        if results.count(results[0]) == len(results):
            break

    return nr_runs

if __name__ == "__main__":
    nr_simul = 10
    somma = 0
    for i in range(nr_simul):
        nr = simulation(3)
        print(f"({nr} flips)")
        somma += nr
    print(f"\nOn average, {somma/nr_simul:.2f} flips were needed.")