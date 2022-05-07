def checkingWin(card):
    win = False
    keys = list(card.keys())

    #diagonal up left - down right
    s = 0
    for n in range(5):
        s += card[keys[n]][n]       
    if s == 0:
        win = True
             
    #diagonal down left - up right
    count = 4
    s = 0
    for key in card:
        s += card[key][count]
        count -= 1
    if s == 0:
        win = True
            
    #horizontal
    for n in range(5):
        s = 0
        for key in card:
            s += card[key][n]
        if s == 0:
            win = True
            break
            
    #vertical
    for key in card:
        s = 0
        for n in range(5):
            s += card[key][n]
        if s == 0:
            win = True
            break

    return win

#demostration cards
card1 = {"B": [0, 0, 3, 0, 0], "I": [16, 22, 27, 18, 17], "N": [41, 35, 43, 42, 39], "G": [46, 55, 59, 51, 52], "O": [65, 73, 75, 72, 0]}
print(checkingWin(card1))

win_horizontal =  {"B": [0, 0, 3, 0, 0], "I": [16, 0, 27, 18, 17], "N": [41, 0, 43, 42, 39], "G": [46, 0, 59, 51, 52], "O": [65, 0, 75, 72, 0]}
print(checkingWin(win_horizontal))

win_vertical =  {"B": [0, 0, 0, 0, 0], "I": [16, 22, 27, 18, 17], "N": [41, 35, 43, 42, 39], "G": [46, 55, 59, 51, 52], "O": [65, 73, 75, 72, 0]}
print(checkingWin(win_vertical))

win_diagonal1 =  {"B": [0, 0, 3, 0, 0], "I": [16, 0, 27, 18, 17], "N": [41, 35, 0, 42, 39], "G": [46, 55, 59, 0, 52], "O": [65, 73, 75, 72, 0]}
print(checkingWin(win_diagonal1))

win_diagonal2 =  {"B": [0, 0, 3, 0, 0], "I": [16, 22, 27, 0, 17], "N": [41, 35, 0, 42, 39], "G": [46, 0, 59, 51, 52], "O": [0, 73, 75, 72, 0]}
print(checkingWin(win_diagonal2))
