from functions_bingo_card import *
import random

#only the functions that generates the bingo card and turn numbers into 0 have no parameters
#the remainder of functions have the parameter card

def win_row():
    #retrieve generated bingo card/dictionary and chooses a random row to turn the numbers to 0
    bingo_card = generate_bingo_numbers()
    bingo_card.update({random.randint(1,5):[0,0,0,0,0]})
    return bingo_card

def win_column():
    #retrieve generated bingo card and chooses a random column to turn the numbers to 0
    bingo_card = generate_bingo_numbers()
    x = random.randint(0,4)
    y = 0
    for i in range(5):
        bingo_card[y+1][x] = 0
        y += 1
    return bingo_card

def win_diagonal():
    #retrieve generated bingo card and casually chooses if the diagonal with 0 starts from left or right
    bingo_card = generate_bingo_numbers()
    y = 5
    x = random.randint(0,1)
    for i in range(5):
        if x == 0:
            bingo_card[i+1][i] = (0)
            y += 1
        else:
            bingo_card[y][i] = (0)
            y -= 1            
    return bingo_card

def random_selection():
    #retrieve bingo card and casually turn numbers into 0
    bingo_card = generate_bingo_numbers()
    for i in range(5):
        x = random.randint(0,4)
        y = random.choice(list(bingo_card.keys()))
        bingo_card[y][x] = 0
    return bingo_card


#functions that check if they are winning bingo cards ⇓

def check_win_row(card):
    #check for every row if there are five consecutives 0
    x = 0
    for r in range(1,6):
        for c in range(5):
            if card[r][c] == 0:
                x += 1
                if x == 5:
                    return True
            else:
                x = 0
    else: return False

def check_win_column(card):
    #check for every column if there are five consecutives 0
    y = 0
    x = 0
    for i in range(5):
        for k in card.keys():
            if card[k][i] == 0:
                x += 1
            else:
                x = 0
        if x == 5:
            return True
    else:
        return False

def check_win_diagonal(card):
    #check if there is a 0 starting at the first value or last value of row/key
    #depending where the diagonal of 0 starts, check if the next or previous value in the next row is a 0
    y = 4
    if card[1][0] == 0:
        x = 1
        for c in range(1,5):
            if card[c+1][c] == 0:
                x += 1
                if x == 5:
                    return True
    elif card[5][0] == 0:
        x = 1
        for c in range(1,5):
            if card[y][c] == 0:
                x += 1
                y -= 1
                if x == 5:
                    return True
    else: return False  


def check_win_general(card):
    #enclose the functions to print the bingo card and to check if the latter has winning combinations
    display_bingo_card(card)
    if check_win_row(card):
        print(check_win_row(card), 'Row')
    elif check_win_column(card):
        print(check_win_column(card), 'Column')
    elif check_win_diagonal(card):
        print(check_win_diagonal(card), 'Diagonal')
    else:
        print('False')


if __name__=='__main__':
    check_win_general(win_row())
    print()

    check_win_general(win_column())
    print()

    check_win_general(win_diagonal())
    print()

    check_win_general(random_selection())