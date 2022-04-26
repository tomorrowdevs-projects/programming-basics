
#unction that creates a random Bingo card and stores it in a dictionary

import random


def bingo_card_creation():
    bingo_card = {'B': sorted(random.sample(range(1, 16), k=5)),               # function that gets 5 random numbers between 1 and 15
                  'I': sorted(random.sample(range(16, 31), k=5)),              # function that gets 5 random numbers between 16 and 30
                  'N': sorted(random.sample(range(31, 46), k=5)),              # function that gets 5 random numbers between 31 and 45
                  'G': sorted(random.sample(range(46, 61), k=5)),              # function that gets 5 random numbers between 46 and 60
                  'O': sorted(random.sample(range(61, 76), k=5))}              # function that gets 5 random numbers between 61 and 75
    for k, v in bingo_card.items():
        print(k, v)



bingo_card_creation()