from random import sample

def create_bingo():
    bingo_card = {
    "B": sample(range(1,16),k=5),
    "I": sample(range(16,31),k=5),
    "N": sample(range(31,46),k=5),
    "G": sample(range(46,61),k=5),
    "O": sample(range(61,76),k=5)
    }
    return(bingo_card)