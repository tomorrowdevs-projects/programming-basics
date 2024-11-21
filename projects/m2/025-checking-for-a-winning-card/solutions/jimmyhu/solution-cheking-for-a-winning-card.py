import random
def checking(card):
    # row winning condition
    for key in card:
        if card[key].count(0) == 5:
            return True
    # column winning condition
    col_win = []
    for s in range(len(card)):
        col_win.append(0)
    for e in range(len(col_win)):
        for dis in card:
            if card[dis][e] == 0:
                col_win[e] += 1
    if 5 in col_win:
        return True
    # diagonal winning condition
    counter = 0
    counter_reverse = 0
    index = len(card) -1
    index_reverse = 0
    for x in card:
        if card[x][index] == 0 and card[x][index_reverse] == 0:
            counter += 1
            counter_reverse += 1
            index -= 1
            index_reverse += 1
        elif card[x][index] == 0:
            counter += 1
            index -= 1
        elif card[x][index_reverse] == 0: 
            counter_reverse += 1
            index_reverse += 1
        else:
            break
    if counter == 5 or counter_reverse == 5:
        return True
    # end in flase if the other condition are not met
    return False

# function for create the card (due it is in another branch it is not  merged i impoted it mannualy)
def bingo_card():
    card = {
        'B' : [],
        'I' : [],
        'N' : [],
        'G' : [],
        'O' : [],
    }
    base_range = 1
    for column in card:
        while len(card[column]) < 5:
            number = random.randint(base_range,base_range+14)
            if number not in card[column]:
                card[column].append(number)
        base_range+=15
    return card

# Main Start
def main(): 
    # cards creation
    cards = []
    for y in range(20):
        cards.append(bingo_card())
    
    # list of previous extracted numbers
    selected = []
    while True:
        # loop and check for a new number evey time
        extracted = random.randint(1,76)
        if extracted in selected:
            while extracted in selected:
                extracted = random.randint(1,76)
        selected.append(extracted)
        # loop for check the winner
        for card in cards:
            if checking(card):
                print(f"The winning card is: {cards.index(card)+1}") 
                break
            else:
                for key in card:
                    if extracted in card[key]:
                        card[key][card[key].index(extracted)] = 0
        # Double break for block the while loop
        if checking(card):
            break
    test_cards = [
        #  horizontal test
        {
            'B' : [0,0,0,0,0],
            'I' : [2,30,12,44,32],
            'N' : [2,30,12,44,32],
            'G' : [2,30,12,44,32],
            'O' : [2,30,12,44,32],
        },
        # vartical test
        {
            'B' : [0,12,45,33,28],
            'I' : [0,12,45,33,28],
            'N' : [0,12,45,33,28],
            'G' : [0,12,45,33,28],
            'O' : [0,12,45,33,28],
        },
        # obliqual test
        {
            'B' : [0,1,1,1,1],
            'I' : [1,0,1,1,1],
            'N' : [1,1,0,1,1],
            'G' : [1,1,1,0,1],
            'O' : [1,1,1,1,0],
        },
        # reversal obliqual test
        {
            'B' : [1,1,1,1,0],
            'I' : [1,1,1,0,1],
            'N' : [1,1,0,1,1],
            'G' : [1,0,1,1,1],
            'O' : [0,1,1,1,1],
        },
        # not winners test
        {
            'B' : [0,1,0,1,0],
            'I' : [1,0,0,0,1],
            'N' : [0,0,1,0,0],
            'G' : [1,0,0,0,1],
            'O' : [0,1,0,1,0],
        }
    ]   
    for test_card in test_cards:
        print(checking(test_card))
if __name__ == '__main__':
    main()
