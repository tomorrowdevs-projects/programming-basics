import copy
import random
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

def random_list(min,max):
    result_list = []
    while len(result_list) < max:
        ran_mumber = random.randint(min,max+1)
        if ran_mumber not in result_list:
            result_list.append(ran_mumber)
    return result_list


def main():
    extraction = random_list(1,75)
    start_card = bingo_card()
    winning = []
    calls = 0
    for i in range(1000):
        card_loop = copy.deepcopy(start_card)
        for num in extraction:
            if checking(card_loop):
                winning.append(calls)
                calls = 0
                random.shuffle(extraction)
                break
            else:
                calls += 1
                for key in card_loop:
                    if num in card_loop[key]:
                        card_loop[key][card_loop[key].index(num)] = 0

    print(f"Max number of calls: {max(winning)} \nMin number of calls: {min(winning)} \nAverage number of calls: {sum(winning) / len(winning):.2f}")


if __name__ == '__main__':
    main()