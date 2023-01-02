from random import shuffle

from solution_checking_for_a_winning_card import checking_winning_card
from solution_create_a_bingo_card import create_bingo_card

def generate_calls():
    bingo_calls = []
    possible_calls = {"B":[1,15], "I":[16,30], "N":[31,45], "G":[46,60], "O":[61,75]}
    for k in possible_calls:
        for i in range(possible_calls[k][0], possible_calls[k][1]+1):
            bingo_calls.append(k + str(i))
    shuffle(bingo_calls)
    return bingo_calls

if __name__ == "__main__":
    calls_per_game = []

    for game in range(1000):
        card = create_bingo_card()
        calls = generate_calls()
        i = 0
        while not checking_winning_card(card):
            letter = calls[i][:1]
            called_number = int(calls[i][1:])
            if called_number in card[letter]:
                while called_number in card[letter]:
                    card[letter][card[letter].index(called_number)] = 0
            i += 1
        number_of_calls = i
        calls_per_game.append(number_of_calls)

    calls_per_game.sort()
    average = sum(calls_per_game)//len(calls_per_game)
    print("In 1000 simulated games, before the card won, an average of {} calls were needed per game, from a minimum of {} to a maximum of {}.".format(average, calls_per_game[0], calls_per_game[-1]))