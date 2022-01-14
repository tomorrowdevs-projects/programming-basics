import create_bingo_card as cardOp
import random

def check_wining_card(card):
    
    # Paramater: dict representing a bingo card
    # Return True, indicating that the card has won otherwise return False
  
    ###### Check if vertical and diagonal ######

    # Counters for diagonal numbers
    index1 = 0  
    index2 = 4  
    counter_row1 = 0
    counter_row2 = 0

    for key in card:
        #check if vertical
        if card[key].count(0) == 5:
            print('You Win')
            return True  

        counter_row1 += card[key][index1]
        counter_row2 += card[key][index2]
        index1 += 1
        index2 -= 1

    # Check if diagonal
    if counter_row1 == 0 or counter_row2 == 0:
        print('You Win')
        return True

    ###### Check if horizontal ######

    horizontal_counter= 0

    for i in range(len(card)):
        for key in card:
            horizontal_counter += card[key][i] 
        if horizontal_counter == 0:
            print('You Win')
            return True
        else:
            horizontal_counter = 0   

    # if is a losing card
    print('You lose') 
    return False    


def main():
    # Card with hotizontal 0 line
    card_horizontal = cardOp.create_bingo_card()
    horizontal_index = random.randint(0,4)
    for key in card_horizontal:
        card_horizontal[key][horizontal_index] = 0

    # Card with vertical 0 line
    card_vertical = cardOp.create_bingo_card()
    cardv_key = random.choice(list(card_vertical))
    card_vertical[cardv_key] = [0 for _ in card_vertical[cardv_key]]

    # Card with diagonal 0 line
    card_diagonal = cardOp.create_bingo_card()
    diagonal_index = 0
    for key in card_diagonal:
        card_diagonal[key][diagonal_index] = 0
        diagonal_index += 1

    # Card with no winning line
    loser_card = cardOp.create_bingo_card()
    loser_index = 4
    for key in loser_card:
        loser_card[key][loser_index] = 0
        loser_index -= 2

    # display results
    print('-----------------')
    cardOp.display_bingo_card(card_horizontal)
    check_wining_card(card_horizontal)
    print('-----------------')
    cardOp.display_bingo_card(card_vertical)
    check_wining_card(card_vertical)
    print('-----------------')
    cardOp.display_bingo_card(card_diagonal)
    check_wining_card(card_diagonal)
    print('-----------------')
    cardOp.display_bingo_card(loser_card)
    check_wining_card(loser_card)
 

if __name__ == '__main__':
    main()

