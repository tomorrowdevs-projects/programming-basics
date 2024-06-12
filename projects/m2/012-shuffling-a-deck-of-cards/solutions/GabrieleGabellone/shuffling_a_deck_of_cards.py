from random import *

def create_deck():
    deck = []
    value_character = "A23456789TJQK"
    suit_character = "shdc"
    for suit in suit_character:
        for value in value_character:
            card = value + suit
            deck.append(card)
    return deck

def shuffle_deck(unshuffled_deck):
    shuffled_deck = unshuffled_deck [:]
    for card in shuffled_deck:
        random_index = randint(0,51)
        shuffled_deck[shuffled_deck.index(card)] = shuffled_deck[random_index]
        shuffled_deck[random_index] = unshuffled_deck[unshuffled_deck.index(card)]
    return shuffled_deck

def main():
    deck_of_cards = create_deck()
    print("Unshuffled deck:", deck_of_cards,"\n")
    shuffled_deck = shuffle_deck(deck_of_cards)
    print("Deck after it has been shuffled:", shuffled_deck)

if __name__ == "__main__":
    main()