import random
import create_bingo_card
import checking_for_winning_card as check_win

def bingo_calls():
    bingo_calls = []
    for number in range(1,76):
        bingo_calls.append(number)
    random.shuffle(bingo_calls)

    return bingo_calls

def play_bingo():                                   # It simulate a bingo game and return calls numbers to win the match
    bingo_card = create_bingo_card.random_bingo_card()
    calls = bingo_calls()
    count_calls = 0

    for call in calls:
        count_calls += 1
        for key in bingo_card: 
            if call in bingo_card[key]:
                i = bingo_card[key].index(call)     # Index to localize the call namber in the value(list) of bingo card 
                bingo_card[key][i] = 0              # Change the call number in 0 

        check_1 = check_win.checking_for_diagonal_line(bingo_card)
        check_2 = check_win.checking_for_horizontal_line(bingo_card)
        check_3 = check_win.checking_for_vertical_line(bingo_card)
        if check_1 == True or check_2 == True or check_3 == True:
            break

    return count_calls

def one_thousand_games():
    calls_in_thousand_games = []

    for game in range(1,1001):
        calls_in_one_game = play_bingo()
        calls_in_thousand_games.append(calls_in_one_game)
    
    max_calls = max(calls_in_thousand_games)
    min_calls = min(calls_in_thousand_games)
    average = sum(calls_in_thousand_games)/len(calls_in_thousand_games)

    result = f'Min calls to win, in 1000 games: {min_calls}\nMax calls to win, in 1000 games: {max_calls}\nAverage of calls in 1000 games: {average:.2f}'

    return result

print(one_thousand_games())
