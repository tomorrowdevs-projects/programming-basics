
import random

# A Bingo card consists of 5 columns of 5 numbers
# Labelled with the letters B, I, N, G and O.
 
# There are 15 numbers that can appear under each letter. 
# Under the B range from 1 to 15, under the I range from 16 to 30 ecc.

def create_bingo_card():

    # Creates a random Bingo card and stores it in a dictionary. 
    # The keys will be the letters B, I, N, G and O. 
    #  The values will be the lists of five numbers that appear under each letter.
     
    labels = 'BINGO'
    start = 1
    stop = 16
    bingo_card = {}

    for i in range(len(labels)):
        bingo_card[labels[i]] = random.sample(range(start,stop), len(labels))

        #change the range of random numbers
        start += 15
        stop += 15
    return bingo_card

def display_bingo_card(card):

    # Write a second function that displays the Bingo card with the columns 
    # labelled appropriately. 

    label = 'BINGO'
    print('B   I   N   G   O ')
    for i in range(len(label)):
        for i2 in range(len(label)):
            if i2 == 4:
                print(card[label[i2]][i])
            else:
                print(str(card[label[i2]][i]).ljust(3), end=' ')

def main():
    card = create_bingo_card()          
    display_bingo_card(card)
        
if __name__ == '__main__':
    main()
