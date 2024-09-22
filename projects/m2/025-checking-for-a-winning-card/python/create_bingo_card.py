def bingo_display(bingo_card):
    print("{:<2} {:<2} {:<2} {:<2} {:<2}".format("B", "I", "N", "G", "O"))
    for index in range(5):
        print("{:<2} {:<2} {:<2} {:<2} {:<2}".format(bingo_card["B"][index],bingo_card["I"][index],bingo_card["N"][index],bingo_card["G"][index],bingo_card["O"][index]))