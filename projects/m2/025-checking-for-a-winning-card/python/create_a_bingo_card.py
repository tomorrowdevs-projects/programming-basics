from random import randint

def create_bingo_card():
    bingo_card = {"B":[], "I":[], "N":[], "G":[], "O":[]}
    for i in range(5):
        bingo_card["B"].append(randint(1,15))
        bingo_card["I"].append(randint(16,30))
        bingo_card["N"].append(randint(31,45))
        bingo_card["G"].append(randint(46,60))
        bingo_card["O"].append(randint(61,75))
    return bingo_card

def display_bingo_card(card):
    print("{:^3} {:^3} {:^3} {:^3} {:^3}".format("B", "I", "N", "G", "O"))
    for i in range(5):
        print("{:3} {:3} {:3} {:3} {:3}".format(card["B"][i], card["I"][i], card["N"][i], card["G"][i], card["O"][i]))

if __name__ == "__main__":
    display_bingo_card(create_bingo_card())