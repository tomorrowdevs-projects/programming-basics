from random import sample

def bingo():
    bingo_card = {
    "B": sample(range(1,16),k=5),
    "I": sample(range(16,31),k=5),
    "N": sample(range(31,46),k=5),
    "G": sample(range(46,61),k=5),
    "O": sample(range(61,76),k=5)
    }
    return(bingo_card)

def bingo_display(bingo_card):
    print("{:<2} {:<2} {:<2} {:<2} {:<2}".format("B", "I", "N", "G", "O"))
    for index in range(5):
        print("{:<2} {:<2} {:<2} {:<2} {:<2}".format(bingo_card["B"][index],bingo_card["I"][index],bingo_card["N"][index],bingo_card["G"][index],bingo_card["O"][index]))

if __name__ == "__main__":
    bingo_display(bingo())
        

    



