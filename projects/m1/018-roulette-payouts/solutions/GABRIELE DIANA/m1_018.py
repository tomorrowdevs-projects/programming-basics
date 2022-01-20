# Roulette Payouts

# A roulette wheel has 38 spaces on it. 
# Of these spaces, 18 are black, 18 are red, and two are green. 
# The green spaces are numbered 0 and 00.
# The red spaces are numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36.
# The remaining integers between 1 and 36 are used to number the black spaces.
# Many different bets can be placed in roulette. 

# We will only consider the following subset of them in this exercise:
# - Single number (1 to 36, 0, or 00)
# - Red versus Black
# - Odd versus Even (Note that 0 and 00 do not pay out for even) 
# - 1 to 18 versus 19 to 36

# Write a program that simulates a spin of a roulette wheel by using a random number generator.
# Display the number that was selected and all of the bets that must be payed.

# For example, if 13 is selected then your program should display:


# The spin resulted in 13...
# Pay 13
# Pay Black
# Pay Odd
# Pay 1 to 18

# If the simulation results in 0 or 00 then your program should display `Pay 0` or `Pay 00` without any further output.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **4 hours**

import random
# Creating the lists I'm gonna work on. "Special" is to have a different behavior from the other numbers in "board".
colour = ("RED", "BLACK")
board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
           19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 0, 99]
special = [0, 99]

# Creating a function that randomly picks from a poll
def draw(pick):
    return random.choice(pick)

# Creating a function that checks if a number is odd or even
def odd_check(number):
    if number % 2 == 0:
        return "EVEN"
    else:
        return "ODD"

# Creating a function that checks if a number is in range 1 to 18 or 19 to 36.
def range_check(number):
    if 0 < number < 19:
        return "1 to 18"
    else:
        return "19 to 36"

# assigning the random pick from "board" to a variable
number_pick = draw(board)
# Different instructions if the number picked is "special" or not,
# in order to display or not the rest of the winning options
if number_pick in special:
    if number_pick == 0:
        print("PAY {}".format(number_pick))
    else:
        print("PAY 00")
else:
    print("PAY {}".format(number_pick))  # displaying winning single number
    print("PAY {}".format(draw(colour)))  # displaying winning colour
    print("PAY {}".format(odd_check(number_pick)))  # displaying winning odd or even
    print("PAY {}".format(range_check(number_pick))) # displaying winning range of numbers
