 # What's the minimum number of times you have to flip a coin before you can have three consecutive flips
# that result in the same outcome (either all three are heads or all three are tails)?
# What's the maximum number of flips that might be needed? How many flips are needed on average?
# In this exercise we will explore these questions by creating a program that simulates several series of coin flips.

# Create a program that uses a random number generator to simulate flipping a coin several times.
# The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails.
# Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur.
# Display an H each time the outcome is heads, and a T each time the outcome is tails,
# with all of the outcomes for one simulation on the same line.
# Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome.
# When your program is run it should perform the simulation 10 times and report the average number of flips needed.

import random

def insertValue():
    h_or_t1 = []
    while True:
        h_or_t1.append(random.randint(0, 1))
        if len(h_or_t1) >= 3:
            if h_or_t1[len(h_or_t1) - 1] == 1 and h_or_t1[len(h_or_t1) - 2] == 1 and h_or_t1[len(h_or_t1) - 3] == 1 or h_or_t1[len(h_or_t1) - 1] == 0 and h_or_t1[len(h_or_t1) - 2] == 0 and h_or_t1[len(h_or_t1) - 3] == 0:
                break    
            else:
                h_or_t1.append(random.randint(0, 1))
    return h_or_t1

total = []
sums = []

for i in range(10):
    total.insert(i, insertValue())

for el in total:
    el.append("(" + str(len(el)) + " flips)")
    sums.append(len(el))
    print(el)

average = sum(sums) / len(sums)
print("\nThe average of flips is: " + str(average))

    

