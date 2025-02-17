

def create_bingo_card() -> dict:
    '''
    return a dict that maps a bingo card
    '''
    import random

    card = {}
    card_head ="BINGO"

    first_range_number = 1
    last_range_number = 15

    for letter in card_head:
        card[letter] = list()

        for i in range(5):

            #to avoid duplicate in the value list of each head's letter
            while True:
                random_number = random.randint(first_range_number,last_range_number)     
                if random_number not in card[letter]:
                    card[letter].append(random_number)
                    break

        first_range_number = last_range_number + 1
        last_range_number = first_range_number + 14

    return card


def print_bingo_card(card: dict):

    #print the head's letter of bingo card
    for head in card.keys():
        print("{:^3}".format(head),end=" ")

    #print dictionary row per row
    for row in range(5):
        print()
        for column in card.keys():
            print("{:^3}".format(card[column][row]),end=" ")

def check_win(card: dict) -> bool:

    '''
    return true if card contains a winning line
    return false if not
    '''
    
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


def call_number() -> list:

    '''
    return a list of number between 1 and 75 that simulates bingo calls
    '''

    import random

    numbers_drawn = list()

    for i in range(1,76):
        numbers_drawn.append(i)

    random.shuffle(numbers_drawn)

    return numbers_drawn

def cross_out_bingo_card(card: dict, numbers_drawn: list) -> int:
    '''
    cross out numbers in list 'numbers_drawn' on the bingo card 'card'.
    cross out means to put 0 in the place of the numbers drawn on card
    return number of total calls to win
    '''

    num =  numbers_drawn[0]
    total_calls = 0

    while not check_win(card):

        if num <= 15:
            if num in card["B"]:
                index = card["B"].index(num)
                card["B"][index] = 0
        elif num <= 30:
            if num in card["I"]:
                index = card["I"].index(num)
                card["I"][index] = 0
        elif num <= 45:
            if num in card["N"]:
                index = card["N"].index(num)
                card["N"][index] = 0
        elif num <= 60:
            if num in card["G"]:
                index = card["G"].index(num)
                card["G"][index] = 0
        elif num <= 75:
            if num in card["O"]:
                index = card["O"].index(num)
                card["O"][index] = 0

        del numbers_drawn[0]
        total_calls += 1
        num = numbers_drawn[0]

    return total_calls


