# Begin by writing a function named createDeck.
# It will use loops to create a complete deck of cards by storing the two-character abbreviations for all 52 cards
# into a list. Return the list of cards as the function’s only result. Your function will not require any parameters.

# Write a second function named shuffle that randomizes the order of the cards in a list.
# One technique that can be used to shuffle the cards is to visit each element in the list and swap it with another
# random element in the list. You must write your own loop for shuffling the cards. You cannot make use of a shuffle function.
# Use both of the functions described in the previous paragraphs to create a main program that displays a deck of cards
# before and after it has been shuffled.
# Ensure that your main program only runs when your functions have not been imported into another file.

# A good shuffling algorithm is unbiased,
# meaning that every different arrangement of the elements is equally probable when the algorithm completes.
# While the approach described earlier in this problem suggested visiting each element in sequence and swapping it with
# an element at a random index, such an algorithm is biased.
# In particular, elements that appear later in the original list are more likely to end up later in the shuffled list.
# Counterintuitively, an unbiased shuffle can be achieved by visiting each element in sequence and swapping it to a
# random index between the position of the current element and the end of the list instead of randomly selecting any index.

import random

def createDeck():
    deck = []
    numbers = ["2", "3", "4", "5", "6", "7", "8", "9"]
    characters = ["T", "J", "Q", "K", "A"]
    suits = ["s", "h", "d", "c"]

    for number in numbers:
        for suit in suits:
            deck.append(str(number) + str(suit))
    
    for character in characters:
        for suit in suits:
            deck.append(str(character) + str(suit))
    
    return deck

for card in createDeck():
    print(card, end= "  ")

def shuffle():
    new_deck = []
    for card in createDeck():
        new_deck.insert(random.randint(0, 52), card)
    return new_deck

print("\n")

for c in shuffle():
    print(c, end= "  ")