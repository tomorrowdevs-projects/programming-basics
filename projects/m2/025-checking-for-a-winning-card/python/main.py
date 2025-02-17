import bingo_card

def check_win(card: dict) -> bool:

    win = False

    #to check win in case of winning row
    for row in range(5):
        row_set = set()
        for column in card.keys():
            row_set.add(card[column][row])
        if len(row_set) == 1 and 0 in row_set:
            win = True

    #to check win in case of winning column
    for column in card.keys():
        column_set = set()
        for item in card[column]:
            column_set.add(item)
        if len(column_set) == 1 and 0 in column_set:
            win = True
    
    #to check win in case of winning diagonal
    index = 0
    heads = "BINGO"
    item = card[heads[index]][index]
    while item == 0 and index < 4:
        index += 1
        item = card[heads[index]][index]
    if index == 4:
        win = True

    #to check win in case of winning inversal diagonal
    index = -1
    heads = "BINGO"
    item = card[heads[index]][-index-1]
    while item == 0 and index > -5:
        index += -1
        item = card[heads[index]][-index-1]
    if index == -5:
        win = True

    return win


if __name__ == "__main__":
    #First test: column N == 0
    card = bingo_card.create_bingo_card()

    for i in range(5):
        card["N"][i] = 0 

    bingo_card.print_bingo_card(card)

    if check_win(card):
        print("You WIN! - column ")


    #Second test: diagonal line == 0
    card = bingo_card.create_bingo_card()

    heads = "BINGO"
    for index in range(5):
        card[heads[index]][index] = 0

    bingo_card.print_bingo_card(card)

    if check_win(card):
        print("You WIN! diagonal")

    #Third test: row 4 == 0
    card = bingo_card.create_bingo_card()

    for key in card.keys():
        card[key][3]=0

    bingo_card.print_bingo_card(card)

    if check_win(card):
        print("You WIN! - row ")

    #Fourth test: You lose - no winning line
    card = bingo_card.create_bingo_card()

    bingo_card.print_bingo_card(card)

    if not check_win(card):
        print("You LOSE! not winning line")

    #Fifth test: inverse diagonal line
    card = bingo_card.create_bingo_card()

    heads = "BINGO"
    for index in range(-1,-6,-1):
        card[heads[index]][-index-1] = 0

    bingo_card.print_bingo_card(card)

    if check_win(card):
        print("You WIN! - inverse diagonal line")