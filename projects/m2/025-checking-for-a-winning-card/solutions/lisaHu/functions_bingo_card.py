import random
def generate_bingo_numbers():
    #change of keys' names from letters (previous exercise) to numbers
    bingo_card = {1:[], 2:[], 3:[], 4:[], 5:[]}
    for i in range(5):
        #append a number for each key, creating already 1 row of numbers in bingo. Make it repeat 4 more times
        bingo_card[1] += [random.randint(1,15)]
        bingo_card[2] += [random.randint(16,30)]
        bingo_card[3] += [random.randint(31,45)]
        bingo_card[4] += [random.randint(46,60)]
        bingo_card[5] += [random.randint(61,75)]
    return bingo_card

def display_bingo_card(bingo_card):
    print('B   ','I   ','N   ','G   ','O')
    #print all values of specified key in one row
    print(*bingo_card[1], sep = '   ')
    x=2
    for i in range(4):
        print(*bingo_card[x], sep = '   ')
        x +=1

if __name__ == "__main__":
    display_bingo_card(generate_bingo_numbers())