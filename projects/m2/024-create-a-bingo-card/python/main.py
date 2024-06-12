def create_bingo_card() -> dict:
    '''
    return a dict that maps a bingo card
    '''
    import random

    card = {}
    card_head ="BINGO"

    first_range_number = 1
    last_range_number = 15

    for letter in card_head:
        card[letter] = list()

        for i in range(5):

            #to avoid duplicate in the value list of each head's letter
            while True:
                random_number = random.randint(first_range_number,last_range_number)     
                if random_number not in card[letter]:
                    card[letter].append(random_number)
                    break

        first_range_number = last_range_number + 1
        last_range_number = first_range_number + 14

    return card


def print_bingo_card(card: dict):
    
    #print the head's letter of bingo card
    for head in card.keys():
        print("{:^3}".format(head),end=" ")

    #print dictionary row per row
    for row in range(5):
        print()
        for column in card.keys():
            print("{:^3}".format(card[column][row]),end=" ")
        

if __name__ == "__main__":
    bingo_card = create_bingo_card()
    print_bingo_card(bingo_card)