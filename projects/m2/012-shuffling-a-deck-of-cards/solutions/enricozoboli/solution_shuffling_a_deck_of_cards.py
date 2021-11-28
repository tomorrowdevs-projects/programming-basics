import random

def create_deck():
    values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
    suits = ["s", "h", "d", "c"]
    deck_of_cards = []
    for i in range(0, len(suits)):
        iter_values = values[:]
        quart_of_cards = []
        for d in range(0, len(values)):
            card = iter_values.pop() + suits[i]
            quart_of_cards.append(card)
        quart_of_cards.reverse()
        deck_of_cards.extend(quart_of_cards)
    return deck_of_cards


def shuffle_cards(deck_of_cards):
    for i in range(len(deck_of_cards)-1 , 1, -1):
        j = random.randint(0, i)  
        deck_of_cards[i], deck_of_cards[j] = deck_of_cards[j], deck_of_cards[i]
    return deck_of_cards


if __name__ == "__main__":
    deck = create_deck()
    print(f"Unshuffled deck:\n\t{create_deck()}\n")
    print(f"Shuffled deck:\n\t{shuffle_cards(deck)}")
    

