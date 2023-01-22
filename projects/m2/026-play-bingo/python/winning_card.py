def winning_card(bingo_card):
    for i in range(5):
        if bingo_card["B"][i] == 0 and bingo_card["I"][i] == 0 and bingo_card["N"][i] == 0 and bingo_card["G"][i] == 0 and bingo_card["O"][i] == 0:  #line winning case
            return True
    for key in bingo_card:
        if sum(bingo_card[key]) == 0:  #column winning case
            return True
    if bingo_card["B"][0] == 0 and bingo_card["I"][1] == 0 and bingo_card["N"][2] == 0 and bingo_card["G"][3] == 0 and bingo_card["O"][4] == 0 or \
    bingo_card["B"][4] == 0 and bingo_card["I"][3] == 0 and bingo_card["N"][2] == 0 and bingo_card["G"][1] == 0 and bingo_card["O"][0] == 0:   #diagonal winning case
        return True
    return False