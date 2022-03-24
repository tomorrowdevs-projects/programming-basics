
#two function, one creates a deck cards and the second shuffles it


import random
import itertools


values = 'A23456789TJQK'
suits = 'scdh'

def deck_cards():
    return ["".join(card) for card in itertools.product(values,suits)]                                 #itertools.product combine 2 elements, in this case we have values and suits


def shuffle():
    shuffle_deck = []
    for card in deck_cards():
        shuffle_deck.insert(random.randrange(52), card)                                                #suffling the deck with random.randrange func
    return shuffle_deck





deck = deck_cards()
full_deck = ' '.join(deck)
print(f'Before:\n{full_deck}')
shuffle_deck = shuffle()
shuffle_deck = ' '.join(shuffle_deck)
print(f'After:\n{shuffle_deck}')