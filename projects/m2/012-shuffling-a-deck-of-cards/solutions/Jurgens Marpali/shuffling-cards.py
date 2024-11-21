import random

def createDeck():
    
    suits = ['s', 'h', 'd', 'c']
    c_value = ['2','3','4','5','6','7','8','9','T','J','Q','K', 'A']
    deck = []

    for value in c_value:
        for suit in suits: 
            deck.append(value + suit)
    
    return deck

def shuffling(deck):

    for position in range(len(deck)):

        last_card = len(deck) - 1
        random_c = random.randint(position, last_card)

        
        deck[position] = deck[random_c]
    
        
    return deck

def main():

    deck = createDeck()
    print(f"Starting Deck: {deck}")
    print(f"Shuffled Deck {shuffling(deck)}")
    
if __name__ == "__main__":
    main()