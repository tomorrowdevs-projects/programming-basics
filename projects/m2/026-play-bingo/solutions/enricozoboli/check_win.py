def check_win_column(card):
    for k in card.keys():
        winning_row = [0 for x in range(5)]
        if card[k] == winning_row:
            return True
    return False

def check_win_row(card):
    for i in range(0, 4):
        win_points = 0
        for k,v in card.items():
            if v[i] != 0:
                break
            else:
                win_points += 1
                continue
        if win_points == 5:
            return True
    return False

def check_win_diagonal(card):
    for i in range(0, 5, 4):
        win_points = 0
        if i == 0:
            for k,v in card.items():
                if v[i] == 0:
                    win_points += 1
                    i += 1
                else:
                    break
        else:
            for k,v in card.items():
                if v[i] == 0:
                    win_points += 1
                    i -= 1
                else:
                    break
        if win_points == 5:
            return True
    return False

def check_win(card):
    if check_win_row(card):
        return True
    if check_win_column(card):
        return True
    if check_win_diagonal(card):
        return True
        