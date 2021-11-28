def check_win_column(card):
    """
    Takes a dictionary and return true if on of the list associated to a key has
    all zeros in it (simulated a column win) otherwise return false.
    Parameter:
    dictionary wich represent a bingo card.
    Return:
    boolean value 
    """
    for k in card.keys():
        winning_row = [0 for x in range(5)]
        if card[k] == winning_row:
            return True
    return False


def check_win_row(card):
    """
    Takes a dictionary and return true if the list associated to a key has the zeros 
    in the correct position(simulated a row win) otherwise return false.
    Parameter:
    dictionary wich represent a bingo card.
    Return:
    boolean value 
    """
    keys = ['B', 'I', 'N', 'G', 'O']
    for i in range(5):
        check_total = 0
        for key in keys:
            check_total += card[key][i]
        if check_total == 0:
            return True
    return False


def check_win_diagonal(card):
    """
    Takes a dictionary and return true if the list associated to a key has the zeros 
    in the correct position(simulated a diagonal line win) otherwise return false.
    Parameter:
    dictionary wich represent a bingo card.
    Return:
    boolean value 
    """
    i = 0
    keys = ['B', 'I', 'N', 'G', 'O']
    check_forward = 0
    check_backward = 0
    for key in keys:
        #sum of card['B'][0] + card['I'][1] and so on
        check_forward += card[key][i]
        #sum of card['B'][4] + card['I'][3] and so on
        check_backward += card[key][(len(keys)-1)-i]
        i += 1
     #if sum not 0 there isn't a winning condition(five zeros)
    if check_forward == 0 or check_backward == 0:
        return True
    else:
        return False
   