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
            
def vert_print(dict):
    # print the labael
    print('\t'.join(dict.keys()))
    # crete a list of the values
    velues = list(dict.values())
    # the i rappresent the index of number to take
    for i in range(len(velues)):
        row = []
        # the j is the list from take the number 
        for j in range(len(velues)):
            row.append(str(velues[j][i]))
        print('\t'.join(row))


def main():
    vert_print(bingo_card())
if __name__ == '__main__':
    main()