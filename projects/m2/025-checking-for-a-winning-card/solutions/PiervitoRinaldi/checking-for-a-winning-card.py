def display_bingo_card(bingo_card):
    for key in bingo_card:     # Print the line 'BINGO'
        print('{key:>5}'.format(key = key), end= '  ')
    print('\n')

    i = 0
    for x in range(1, 6):       # Print each line of the bingo card
        for k in bingo_card:
            print('{number:>5}'.format(number = bingo_card[k][i]), end=' |')
        print('\n')
        i += 1

def checking_for_a_winning_card(bingo_card):
    # A bingo winning card contain vertical, horizontal or diagonal line of 5 numbers that have all been called

    result = False
    i = 0               # Is an index to advance in the list, it's useful for the count of diagonal combo
    diagonal_line = 0  
    horizontal_line = 0
    
    for key in bingo_card:
        if sum(bingo_card[key]) == 0:   # Check for a vertical line
            result = True
            break
        elif bingo_card[key][0] == 0:   # Check for a horizontal line
            horizontal_line += 1        # Count if the numbers are in the right position to have a horizontal line    
            if horizontal_line == 5:
                result = True
                break
        
        if bingo_card[key][i] == 0:     # Check for a diagonal line
            diagonal_line += 1          # Count if the numbers are in the right position to have a diagonal line
            i += 1
            if diagonal_line == 5:     
                result = True
                break

    return result

def main():
    diagonal_winning_card = {
        'B': [0,7,10,11,14], 'I': [17,0,20,23,29], 'N': [32,34,0,39,45], 'G': [47,50,51,0,59], 'O': [63,64,67,71,0]
    }
    vertical_winning_card = {
        'B': [3,7,10,11,14], 'I': [0,0,0,0,0], 'N': [32,34,36,39,45], 'G': [47,50,51,55,59], 'O': [63,64,67,71,74]
    }
    horizontal_winning_card = {
        'B': [0,7,10,11,14], 'I': [0,19,20,23,29], 'N': [0,34,36,39,45], 'G': [0,50,51,55,59], 'O': [0,64,67,71,74]
    }
    no_winning_card = {
        'B': [0,7,0,11,14], 'I': [17,0,20,0,29], 'N': [32,34,36,0,45], 'G': [0,50,51,0,59], 'O': [0,64,67,71,0]
    }

    bingo_cards_list = [diagonal_winning_card, vertical_winning_card, horizontal_winning_card, no_winning_card]

    for card in bingo_cards_list:
        display_bingo_card(card)
        if checking_for_a_winning_card(card) == True:
            print("Ther's a winning line! You Win!\n")
        else:
            print("There isn't a winning line! You Loose!\n")

if __name__ == '__main__':
    main()



