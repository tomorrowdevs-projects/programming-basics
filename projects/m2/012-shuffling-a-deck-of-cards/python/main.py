import random

def create_deck()-> list:

    values = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]
    suits = ["s","h","d","c"]

    deck = []

    for suit in suits:
        for value in values:
            deck.append(value+suit)

    return deck

def shuffle_deck(deck:list) -> list:
    
    index = 0
    while index < len(deck):
        new_index = random.randint(index,len(deck)-1)
        temp_card = deck[index]
        deck[index]=deck[new_index]
        deck[new_index]=temp_card
        index += 1

if __name__ == "__main__":
    deck = create_deck()
    for card in deck:
        print(card,end=" ")
    print("")

    print("LET'S SHUFFLE!!")

    shuffle_deck(deck)
    for card in deck:
        print(card,end=" ")
