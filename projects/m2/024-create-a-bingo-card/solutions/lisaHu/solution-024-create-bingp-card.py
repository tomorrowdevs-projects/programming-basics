import random
def generate_bingo_numbers():
    bingo_card = {'B':[], 'I':[], 'N':[], 'G':[], 'O':[]}
    for i in range(5):
        #append a number for each key, creating already 1 row of numbers in bingo. Make it repeat 4 more times
        bingo_card['B'] += [random.randint(1,15)]
        bingo_card['I'] += [random.randint(16,30)]
        bingo_card['N'] += [random.randint(31,45)]
        bingo_card['G'] += [random.randint(46,60)]
        bingo_card['O'] += [random.randint(61,75)]
    return bingo_card

def display_bingo_card():
    bingo_card = generate_bingo_numbers()
    print('B  ','I   ','N  ','G  ','O')
    #print all values of specified key in one row
    print(*bingo_card['B'], sep = '   ')
    print(*bingo_card['I'], sep = '  ')
    print(*bingo_card['N'], sep = '  ')
    print(*bingo_card['G'], sep = '  ')
    print(*bingo_card['O'], sep = '  ')

if __name__ == "__main__":
    display_bingo_card()