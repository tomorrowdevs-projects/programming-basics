import random

def bingo_card():
    bingo_card = {
        'B': [], 'I': [], 'N': [], 'G': [], 'O': []
    }
    range_one = 1
    range_two = 15
    for key in bingo_card:
        while len(bingo_card[key]) < 5:     # Add a number if doesn't appear yet, while the sequence will be five numbers
            number = random.randint(range_one, range_two)
            if number not in bingo_card[key]:
                bingo_card[key].append(number)
        bingo_card[key].sort()
        range_one += 15     # The ranges increase by fifteen every time
        range_two += 15

    return bingo_card

def display_bingo_card():
    card_values = bingo_card()

    for key in card_values:     # Print the line 'BINGO'
        print('{key:>5}'.format(key = key), end= ' ')
    print('\n')

    i = 0
    for x in range(1, 6):       # Print each line of the bingo card
        for k in card_values:
            print('{number:>5}'.format(number = card_values[k][i]), end=' ')
        print('\n')
        i += 1

def main():
    display_bingo_card()

if __name__ == '__main__':
    main()



