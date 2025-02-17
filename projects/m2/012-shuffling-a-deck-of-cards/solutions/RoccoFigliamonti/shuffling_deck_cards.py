"""Begin by writing a function named createDeck. It will use loops to create a complete deck of cards by storing the two-character abbreviations for all 52 cards into a list. Return the list of cards as the function’s only result. Your function will not require any parameters.
"""


from random import randint

def create_deck():
    value = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]
    suits = ["h","s","d","c"]
    deck = []
    for el in value:
        for suit in suits:
            new_el = el + suit
            deck.append(new_el)
    return deck


"""Write a second function named shuffle that randomizes the order of the cards in a list."""


def shuffle_cards(cards):
    new_shuffle_cards = []
    number_of_cards = len(cards)
    for i in range(0,len(cards)):
        card_index = randint(0,number_of_cards-1) #pick a random index of a card in cards
        new_shuffle_cards.append(cards[card_index]) #put this card at the end of a new deck
        cards.pop(card_index) #remove this card from the cards
        number_of_cards -= 1  #because now you have one less card in cards and so one less index to choose
    return new_shuffle_cards



deck = create_deck()
print(deck)

new_deck = shuffle_cards(deck)
print(new_deck)
