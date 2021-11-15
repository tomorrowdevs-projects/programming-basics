# A Bingo card consists of 5 columns of 5 numbers which are labelled with the letters B, I, N, G and O.

# There are 15 numbers that can appear under each letter.

# In particular, the numbers that can appear under the B range from 1 to 15,
# the numbers that can appear under the I range from 16 to 30,
# the numbers that can appear under the N range from 31 to 45, and so on.

# Write a function that creates a random Bingo card and stores it in a dictionary.

# The keys will be the letters B, I, N, G and O. The values will be the lists of five numbers that appear under each letter.
# Write a second function that displays the Bingo card with the columns labelled appropriately.

# Use these functions to write a program that displays a random Bingo card.

# Ensure that the main program only runs when the file containing your solution has not been imported into another program.

import random

bingo = {"B":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "I":[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "N":[31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "G":[46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], "O":[61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 61, 72, 73, 74, 75]}

bingo_card = {}

def generateCard(c):
    c["B"] = random.sample(range(1, 15), 5)
    c["I"] = random.sample(range(16, 30), 5)
    c["N"] = random.sample(range(31, 45), 5)
    c["G"] = random.sample(range(46, 60), 5)
    c["O"] = random.sample(range(61, 75), 5)

    return c

print(generateCard(bingo_card))
