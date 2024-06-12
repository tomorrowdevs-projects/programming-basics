import random

def create_deck():
    cards_list = []
    suits = ['s', 'h', 'd', 'c']
    
    for i in range(len(suits)):
        suit = suits[i]
        for card in range(1,14):
            if card == 1:
                card = 'A' + suit
                cards_list.append(card)
            elif card > 1 and card < 10:
                card = str(card) + suit
                cards_list.append(card)
            elif card == 10:
                card = 'T' + suit
                cards_list.append(card)
            elif card == 11:
                card = 'J' + suit
                cards_list.append(card)
            elif card == 12:
                card = 'Q' + suit
                cards_list.append(card)
            elif card == 13:
                card = 'K' + suit
                cards_list.append(card)

    return cards_list

def shuffle():
    cards_list = create_deck()
    shuffle_list = cards_list.copy()
    for i in range(len(shuffle_list)):
        shuffle_list[i] = shuffle_list[random.randrange(len(shuffle_list))]
    
    return shuffle_list

print(create_deck())
print(shuffle())
