import random

def create_card():
    """This function create a ramdom bingo card"""
    s = 'BINGO'
    l = 1
    d = dict()
    for c in s:
        i = 0
        while i <= 4:
            n = random.randint(l, l+14)
            if c not in d:
                d[c] = d.get(n, [])
                d[c].append(n)
                i += 1
            if n not in d[c]:
                d[c].append(n)
                i += 1
        l += 15
    return d

def column_win(card):
    """
    This function create an always winning bingo card
    with a vertical line of zero's.
    """
    bingo_letters, row = random.choice(list(card.items()))
    for v in range(len(row)):
        row[v] = 0
    return card

def row_win(card):
    """
    This function create an always winning bingo card
    with a horizontal line of zero's.
    """
    pos = random.randint(0, 4)
    for k in card.keys():
        card[k][pos] = 0
    return card

def diagonal_win(card):
    """
    This function create an always winning bingo card
    with a diagonal line of zero's.
    """
    x = bool(random.getrandbits(1))
    i = 0
    d = 4
    for k in card.keys():
        if x :
            card[k][i] = 0
            i += 1
        else:
            card[k][d] = 0
            d -= 1
    return card

def casual_extraction(card):
    """
    This function create a bingo card with only 
    five zero's. His purpose is to show the correctness 
    of the check_win functions. However there's a small
    chance that a winning card come out.
    """
    count = 0
    while count <= 4:
        bingo_letters = random.choice(list(card.keys()))
        index = random.randint(0,4)
        if card[bingo_letters][index] == 0:
            continue
        else:
            card[bingo_letters][index] = 0
            count += 1
    return card