import random

def create_deck():
    deck = []
    value = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    suit = ['s','h','d','c']
    #for every value, create a loop for every suit where the program creates a
    #a string of value + suit and append the string in the deck list
    for v in range(len(value)):
        for s in suit:
            x = value[v] + s
            deck.append(x)
    return deck

def shuffle():
    #return a list with randomized elements picked from deck list
    return random.sample(create_deck(), 52)

if __name__ == '__main__':
    #display shuffled deck
    print('Shuffled deck:')
    print(*shuffle(), sep = ', ')