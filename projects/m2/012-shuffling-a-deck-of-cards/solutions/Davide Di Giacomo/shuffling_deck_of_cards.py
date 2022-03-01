#First character is the value of the card, the values 2 through 9 and “T”, “J”, “Q”, “K”, “A” are 10, Jack, Queen, King, Ace.
# The second character represent the suit of the card. “s” spades, “h” hearts, “d” diamonds and “c” clubs.
#use loops to create a complete deck of cards and Return the list of cards
#bring element in sequence and swapping it to a random index between the position of the current element and the end
import random

def create_deck():
    value=["T", "J", "Q", "K", "A"]
    suits=["s", "h", "d", "c"]
    cards=[]
    #create a list of value for single suit
    for x in range (2, 10):
        value.append(str(x))
    #add suits to value
    for y in range(0, len(value)):
        for z in range(0, len(suits)):
            card=value[y]+suits[z]
            cards.append(card)
    return cards

def shuffle():
    cards=create_deck()
    #bring element in sequence
    for x in range(0, 52):
        index=[]
        #swapping it to a random index between the position of the current element and the end
        for y in range(x, 52):
            index.append(y)
        shuffle=random.choice(index)
        cards[x]=cards[shuffle]
    return cards

def main():
    print(f"The original deck is: {create_deck()}")
    print(f"The shuffle deck is: {shuffle()}")
    
if __name__ == "__main__":
    main()