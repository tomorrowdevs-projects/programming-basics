def checking_for_vertical_line(bingo_card):
    result = False
    for key in bingo_card:
        if sum(bingo_card[key]) == 0:
            result = True
            break
    return result

def checking_for_diagonal_line(bingo_card):
    i_d_0 = 0
    i_d_4 = 4
    diagonal_line_one = 0
    diagonal_line_two = 0
    result = False
    for key in bingo_card:
        if bingo_card[key][i_d_0] == 0:
            diagonal_line_one += 1
            i_d_0 += 1
            if diagonal_line_one == 5:     
                result = True
                
    for key in bingo_card:
        if bingo_card[key][i_d_4] == 0:
            diagonal_line_two += 1
            i_d_4 -= 1
            if diagonal_line_two == 5:     
                result = True
                
    return result


def checking_for_horizontal_line(bingo_card):
    result = False
    row_dict = { 'row_1': [], 'row_2': [], 'row_3': [], 'row_4': [], 'row_5': []
    }
    i = 0
    for row in row_dict:
        for key in bingo_card:
            row_dict[row].append(bingo_card[key][i])
        i += 1
    
    for key in row_dict:
        if sum(row_dict[key]) == 0:
            result = True
            break

    return result    

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

def main():
    diagonal_winning_card = {
        'B': [0,7,10,11,14], 'I': [17,0,20,0,29], 'N': [32,34,0,39,45], 'G': [47,0,51,0,59], 'O': [0,64,67,71,0]
    }
    vertical_winning_card = {
        'B': [3,7,10,11,14], 'I': [0,0,0,0,0], 'N': [32,34,36,39,45], 'G': [47,50,51,55,59], 'O': [63,64,67,71,74]
    }
    horizontal_winning_card = {
        'B': [7,0,10,11,14], 'I': [19,0,20,23,29], 'N': [34,0,36,39,45], 'G': [50,0,51,55,59], 'O': [64,0,67,71,74]
    }
    no_winning_card = {
        'B': [0,7,0,11,14], 'I': [17,0,20,0,29], 'N': [32,34,36,0,45], 'G': [0,50,51,0,59], 'O': [0,64,67,71,0]
    }

    bingo_cards_list = [diagonal_winning_card, vertical_winning_card, horizontal_winning_card, no_winning_card]

    for card in bingo_cards_list:
        display_bingo_card(card)
        if checking_for_diagonal_line(card) == True or checking_for_horizontal_line(card) == True or checking_for_vertical_line(card) == True:
            print("Ther's a winning line! You Win!\n")
        else:
            print("There isn't a winning line! You Loose!\n")

if __name__ == '__main__':
    main()
