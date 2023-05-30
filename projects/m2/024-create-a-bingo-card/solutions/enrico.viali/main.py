"""
# Create a Bingo Card

A Bingo card consists of 5 columns of 5 numbers which are labelled with the letters B, I, N, G and O. 

There are 15 numbers that can appear under each letter. 

In particular, the numbers that can appear under the B range from 1 to 15, the numbers that can appear under the I range from 16 to 30, the numbers that can appear under the N
range from 31 to 45, and so on.

Write a function that creates a random Bingo card and stores it in a dictionary. 

The keys will be the letters B, I, N, G and O. 
The values will be the lists of five numbers that appear under each letter. Write a second function that displays the Bingo card with the columns labelled appropriately. 

Use these functions to write a program that displays a random Bingo card. 

Ensure that the main program only runs when the file containing your solution has not been imported into another program.
 	 	 	 			 
# Documentation

For this project solution you may use:

- Objects (Dictionaries in Python)
- Functions
- Conditionals
- Repetitions

# Deadline

This project requires to be completed in a maximum of **2 hours**

"""

from random import randint

bingo = "BINGO"
RANGE = 15
NUM_PER_LETTERA = 5

diz = {}

for i, lettera in enumerate(bingo):
    diz[lettera] = []
    for j in range(NUM_PER_LETTERA):
        num_casuale = randint(i*RANGE+1, (i+1)*RANGE)
        diz[lettera].append(num_casuale)
        # print(lettera, num_casuale, end = " ")

for chiave in diz:
    print(f"\n\nvalori per lettera: {chiave}")
    for valore in diz[chiave]:
        print(valore)
