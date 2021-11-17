import create_a_bingo_card as cbc
import varius_winning_check as vwc

def check_win(card):
    if (
        vwc.check_win_column(card)  or
        vwc.check_win_row(card) or
        vwc.check_win_diagonal(card)
    ):
        return True
    return False

def print_card(card):
    """
    This function take a dictionary represent a bingo card
    as a parameter and print it as a "real" bingo card.
    """
    first = ""
    for k in card.keys():
        first += k + (5 * " ")
    print(first)
    for i in range(0, 5):
        line_list = []
        for k,v in card.items():
            if len(str(v[i])) == 1:
                line_list.append(str(v[i])+ " ")
            else:
                line_list.append(str(v[i]))
        line = " |  ".join(line_list)
        print(line)
        
if __name__ == "__main__":
    card_vertical_win = cbc.column_win(cbc.create_card())
    card_horizontal_win = cbc.row_win(cbc.create_card())
    card_diagonal_win = cbc.diagonal_win(cbc.create_card())
    card_casual_win = cbc.casual_extraction(cbc.create_card())
    
    print_card(card_vertical_win)
    if check_win(card_vertical_win):
        print("Win\n")
    else:
        print("Lose\n")
    print_card(card_horizontal_win)
    if check_win(card_horizontal_win):
        print("Win\n")
    else:
        print("Lose\n")
    print_card(card_diagonal_win)
    if check_win(card_diagonal_win):
        print("Win\n")
    else:
        print("Lose\n")
    print_card(card_casual_win)
    if check_win(card_casual_win):
        print("Win")
    else:
        print("Lose")
