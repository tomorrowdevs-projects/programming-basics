import random
def bingo_card():
    card = {
        "B" : [],
        "I" : [],
        "N" : [],
        "G" : [],
        "O" : [],
    }

    min = 1
    max = 15

    for letter in card:
        card[letter] = random.sample(range(min, max), 5)
        min += 15
        max += 15
        if letter == "N":
            card[letter][2] = "x"
    return card

def check_win(card):
    win = False

    if card["B"][0] == "0" and card["I"][1] == "0" and card ["N"][2] == "0" and card["G"][3] == "0" and card["O"][4] == "0":
        win = True
    elif card["O"][0] == "0" and card["G"][1] == "0" and card["N"][2] == "0" and card["I"][3] == "0" and card["B"][4] == "0":
        win = True
    elif card["B"][0] == "0" and card["O"][1] == "0" and card["B"][4] == "0" and card["O"][0] == "0":
        win = True
    for letter in card:
        if(len(set(card[letter]))== 1):
            win = True
    for letter in card:
        for n in letter:
            i = 0
            if card[letter][i] == "0":
                i += 1
        if i == 5:
            win = True
            break
    return win

def main():
    card = bingo_card()
    print(check_win(card))

if __name__ == "__main__":
    main()