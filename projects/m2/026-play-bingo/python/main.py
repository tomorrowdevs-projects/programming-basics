from random import shuffle
from create_bingo import*
from winning_card import*

def bingo_game(bingo_card):    #simulation of a bingo game
    calls = []
    for i in range(1,76):
        calls.append(i)
    shuffle(calls)
    number_of_calls = 0

    for i in calls:
        number_of_calls += 1
        for key in bingo_card:
            if i in bingo_card[key]:
                zero = bingo_card[key].index(i)
                bingo_card[key][zero] = 0       #if the called number is in bingo card, it will become '0'.
        
        if winning_card(bingo_card) == True:
            break
    return(number_of_calls)    #when the bingo card wins, the program will return the number of calls needed before win.

def main():
    all_calls = []
    for i in range(1000):
        single_call = bingo_game(create_bingo())    #simulate a bingo game 1000 times and append the number of calls needed before the win to the list 'all_calls'.
        all_calls.append(single_call)
    
    maximum = max(all_calls)
    minimum = min(all_calls)
    average = sum(all_calls)/1000
    print("After 1000 bingo games simulation:")
    print(("Maximum number of calls: {}, Minimum number of calls: {}, Average number of calls: {}") .format(maximum,minimum,average))

main()



    

                
    

