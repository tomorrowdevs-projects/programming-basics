import random

def create_deck():
    values_list = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
    seeds_list = ['s', 'd', 'c', 'h']
    card_list = []

    for seed in seeds_list:
        for value in values_list:
            card = value + seed
            card_list.append(card)

    return card_list

def shuffle(card_list):
    shuffled_deck = []
    deck = card_list.copy()
    
    for i in range(52):
        random_card = random.choices(deck)
        shuffled_deck.append(random_card)
        deck.remove(random_card[0])

    return shuffled_deck

if __name__ == '__main__':

    print(create_deck())
    print(shuffle(create_deck()))