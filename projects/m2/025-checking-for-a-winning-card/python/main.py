from create_bingo_card import*

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
    

def main():
    horizontal_win = {"B": [0,4,11,6,13], "I": [0,27,22,25,16], "N":[0,44,35,39,40], "G": [0,50,60,49,57], "O": [0,62,72,74,65]}
    vertical_win = {"B": [0,0,0,0,0], "I": [29,27,22,25,16], "N":[32,44,0,39,40], "G": [0,50,60,49,57], "O": [0,62,72,74,65]}
    diagonal_win = {"B": [0,4,11,6,13], "I": [20,0,22,25,16], "N":[0,44,0,39,40], "G": [55,50,60,0,57], "O": [70,62,72,74,0]}
    no_win = {"B": [0,4,11,6,13], "I": [19,27,22,0,16], "N":[0,0,35,39,40], "G": [55,50,0,49,0], "O": [0,62,72,74,65]}
    demonstrations = [horizontal_win, vertical_win, diagonal_win, no_win]

    for demo in demonstrations:
        bingo_display(demo)
        if winning_card(demo) == True:
            print("Winning card.")
        else:
            print("Loosing card.")
        print(" ")
        

if __name__ == "__main__":
    main()

    

    

