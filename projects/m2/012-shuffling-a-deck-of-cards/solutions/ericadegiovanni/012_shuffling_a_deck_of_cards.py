    
import random

def createDeck():   

    #use loops to create a complete deck of cards by storing the two-character 
    #abbreviations for all 52 cards into a list.

    suits = ['s', 'h', 'd', 'c']
    card_values = ['2','3','4','5','6','7','8','9','T','J','Q','K', 'A']
    deck = []
    for value in card_values:
        for suit in suits:
            deck.append(value + suit)
            
    return deck

def shuffle(deck):

    # use a loop to shuffle the card of a deck
    # visit each element in sequence and swapping it to a random index between 
    # the position of the current element and the end of the list

    for card_position in range(len(deck)):
       
        last_card_index = len(deck) -1
        random_index = random.randint(card_position, last_card_index)

        # swapping deck
        temp = deck[card_position]
        deck[card_position] = deck[random_index]
        deck[random_index] = temp

    return deck

# Create a main program that displays a deck of cards before and after it has been shuffled.
# Your main program only runs when your functions have not been imported into another file. 
 
def main():
    print('----------------')
    print('Starting deck:')
    starting_deck = createDeck()
    print(starting_deck)
    print('----------------')
    print('Shuffled deck:')
    shuffled_deck = shuffle(starting_deck)
    print(shuffled_deck)
    print('----------------')

    
if __name__ == '__main__':
    main()
