def check_win(card):
    win = False
    if card ["B"][0] == "X" and card ["I"][1] == "X" and card["N"][2] == "X" and card ["G"][3] == "X" and card ["O"][4] == "X":
        win = True
    elif card["O"][0] == "X" and card["G"][1] == "X" and card["N"] == "X" and card["I"][3] == "X" and card["B"][4] == "X":
        win = True
    elif card["B"][0] == "X" and card["O"][4] == "X" and card["O"][0] == "X" and card["B"][4] == "X":
        win = True
    
    for letter in card:
        if(len(set(card[letter]))== 1):
            win = True
    for i in range(5):
        count = 0
        for letter in card:
            if card[letter][i] == "X":
                count += 1
                win = True
                break  
    return win