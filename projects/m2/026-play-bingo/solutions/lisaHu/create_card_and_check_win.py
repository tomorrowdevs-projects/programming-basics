import random
def generate_bingo_numbers():
    bingo_card = {1:[], 2:[], 3:[], 4:[], 5:[]}
    for i in range(5):
        #append a number for each key, creating already 1 row of numbers in bingo. Make it repeat 4 more times
        bingo_card[1] += [random.randint(1,15)]
        bingo_card[2] += [random.randint(16,30)]
        bingo_card[3] += [random.randint(31,45)]
        bingo_card[4] += [random.randint(46,60)]
        bingo_card[5] += [random.randint(61,75)]
    return bingo_card

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
    if check_win_row(card):
        return True
    elif check_win_column(card):
        return True
    elif check_win_diagonal(card):
        return True
    else:
        return False
