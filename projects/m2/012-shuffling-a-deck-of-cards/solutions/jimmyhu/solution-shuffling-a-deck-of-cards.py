import random

def createDeck():
    deck = []
    suits = ['s','h','d','c']
    high_card = ['T','J','Q','K','A']
    for suit in suits:
        for i in range(2,10):
            deck.append(f"{i}{suit}")
        for s in high_card:
            deck.append(f"{s}{suit}")
    return deck

def shuffle(lst):
    randomized = []
    for card in lst:
        position = random.randint(0,51)
        randomized.insert(position,card)
    return randomized
            



def main():
    print(createDeck())
    print(shuffle(createDeck()))
if __name__ == '__main__':
    main()