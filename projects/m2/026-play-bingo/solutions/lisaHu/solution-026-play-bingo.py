import random
from create_card_and_check_win import *

#create list of numbers and shuffle them in a new list
random_num = []
def create_bingo_calls():
    numbers = []
    for n in range(1,76):
        numbers.append(n)
    random_num = random.sample(numbers,75)
    return random_num

#simulate one bingo call: randomly call a number and check for every item in value if it's equal to bingo call
#if it is, find the index of the number called and replace it with 0
def one_call(card, l):
    c = random.choice(l)
    l.remove(c)
    for k,v in card.items():
        for n in v:
            if n == c:
                x = v.index(c)
                card[k][x] = 0
    return card

#simulate one bingo game: as a bingo card and a bingo calls list are randomly generated, set those as variables
#to not change them whenever they are used.
#itirate one bingo call for 75 times and check simultaneously if it's a winning card. count every itiration
#return itiration count after a winning combination is found.
def one_bingo_game():
    card = generate_bingo_numbers()
    list = create_bingo_calls()
    count = 0
    for c in range(75):
        check_win_general(one_call(card, list))
        count += 1
        if check_win_general(one_call(card, list)):
            break
    return count

#itirate a bingo game for 1000 times and count the maximun, minimun and average count needed to win a game
def a_thousand_games():
    average_count = 0
    min_count = 75
    max_count = 0
    for i in range(1000):
        x = one_bingo_game()
        average_count += x
        if x < min_count:
            min_count = x
        elif x > max_count:
            max_count = x
    average_count //= 1000
    return average_count, min_count, max_count

if __name__=='__main__':
    average_count, min_count, max_count = a_thousand_games()
    print('Average count of calls for a winning card is:', average_count)
    print('Minimun count of calls for a winning card is:', min_count)
    print('Maximun count of calls for a winning card is:', max_count)