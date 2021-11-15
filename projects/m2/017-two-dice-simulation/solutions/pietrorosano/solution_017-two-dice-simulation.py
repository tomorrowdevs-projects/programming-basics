# In this exercise you will simulate 1,000 rolls of two dice.
# Begin by writing a function that simulates rolling a pair of six-sided dice.
# Your function will not take any parameters. It will return the total that was rolled on two dice as its only result.
# Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times.
# As your program runs, it should count the number of times that each total occurs.
# Then it should display a table that summarizes this data.
# Express the frequency for each total as a percentage of the number of rolls performed.
# Your program should also display the percentage expected by probability theory for each total.

import random
dices_sum = []
count_sum = []
for n in range(1000):
    a = random.randint(1, 6)
    b = random.randint(1, 6)
    c = a + b
    dices_sum.append(c)

for num in dices_sum:
    times = str(num) + " " + str(dices_sum.count(num))
    if times not in count_sum:
        count_sum.append(times)

for e in count_sum:
    print(e)