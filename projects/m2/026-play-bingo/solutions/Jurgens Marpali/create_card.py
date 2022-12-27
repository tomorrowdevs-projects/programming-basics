import random

def bingo_card():
    label = 'BINGO'
    min = 1
    max = 15
    bingo_cards = {}
    
    for i in range(len(label)):
        bingo_cards[label[i]] = random.sample(range(min, max), len(label))
        min += 15
        max += 15
    return bingo_cards


def print_card(card):
    label = 'BINGO'
    print('B  I  N  G  O')
    for i in range(len(label)):
        for i2 in range(len(label)):
            if i2 == 4:
                print(card[label[i2]][i])
            else:
                print(str(card[label[i2]][i]).ljust(3), end=' ')

def main():
    card = bingo_card()
    print_card(card)

if __name__ == "__main__":
    main()