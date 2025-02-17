import random

def createDeck():
    n = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
    suit = ["s", "h", "d", "c"]
    cards = []
    for s in suit:
        for i in n:
           cards.append(i+s) 
    return cards

def shuffle(deck):
    shuffled = []
    while len(shuffled) < 52:
        card = deck[random.randint(0,51)]
        if card not in shuffled:
            shuffled.append(card)
        else:
            pass
    return shuffled
       
if __name__ == "__main__":
    input("Press ENTER to shuffle:")
    print(f"Your deck was: \n{createDeck()}")
    print(f"And now is:\n{shuffle(createDeck())}")
