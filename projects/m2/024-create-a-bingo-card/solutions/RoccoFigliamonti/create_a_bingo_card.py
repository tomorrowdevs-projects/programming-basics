"""Write a function that creates a random Bingo card and stores it in a dictionary. 
The keys will be the letters B, I, N, G and O. 
The values will be the lists of five numbers that appear under each letter.
Write a second function that displays the Bingo card with the columns labelled appropriately. 
Use these functions to write a program that displays a random Bingo card. """

from random import sample

def create_card():
    card = {"B": [x for x in sample(range(1,16),5)],
            "I": [x for x in sample(range(16,31),5)],
            "N": [x for x in sample(range(31,46),5)],
            "G": [x for x in sample(range(46,61),5)],
            "O": [x for x in sample(range(61,76),5)]}
    return card


print(create_card())
for el in create_card().items():
    print(el)

