import random

def random_lot_numbs():
    numbs_list = []
    list_len = len(numbs_list)

    while list_len < 5:
        list_len = len(numbs_list)
        numb = random.randrange(1, 49)
        
        if numb not in numbs_list:
            numbs_list.append(numb)

    numbs_list.sort()
    return numbs_list
    
if __name__ == '__main__':
    print(random_lot_numbs())