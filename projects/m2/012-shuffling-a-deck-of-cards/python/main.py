from random import randrange

def createDeck():
    card_value = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]  
    card_suit = ["s","h","d","c"]  #spades, hearts, diamonds, clubs
    deck = []

    for i in range(13):
        for suit in card_suit:
            card = card_value[i]+suit
            deck.append(card)

    return(deck)

def shuffle_deck(any_list):
    shuffled = any_list[:]
    for item in any_list:
        position = randrange(52)
        shuffled[any_list.index(item)] = shuffled[position]  #switching every item position with a random position
        shuffled[position] = any_list[any_list.index(item)]  
    return(shuffled)

def main():
    print("Deck before shuffle: ")
    print(*createDeck(), sep = ", ")
    print("Deck after shuffle: ")
    print(*shuffle_deck(createDeck()), sep = ", ")

if __name__ == "__main__":
    main()

    

    


