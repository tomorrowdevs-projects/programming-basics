import random
from solution_m2025 import check_wining_card
from create_bingo_card import create_bingo_card

def create_calls_list():

    # create a list of all bingo calls and randomize its elements
    # by calling the shuffle function in the random module. 

    bingo_calls = {'B': [], 'I':[], 'N':[], 'G':[], 'O':[]}
    start = 1
    stop = 16
    for key in bingo_calls:
        bingo_calls[key] = [n for n in range(start,stop)]
        random.shuffle(bingo_calls[key])
        start += 15
        stop += 15
    return bingo_calls


def call_bingo_numbers(call_list):

    # recieve an object cointaining all the valid calls
    # choose and return a random call (key/number) from all the valid bingo calls

    random_key = random.choice(list(call_list))
    random_number = random.choice(call_list[random_key])
    return random_key, random_number

def update_calls_list(calls_list,key,value):

    # delete a call(key,value) from the list of valid bingo calls
    # return the updated object

    calls_list[key].remove(value)
    if calls_list[key] == []:
        calls_list.pop(key)     
    return calls_list

def update_player_card(card, key,value):

    #if present in the player card, delete a call (key,value) replacing it with 0

    card_row = card[key]
    if value in card_row:
        card_row[card_row.index(value)] = 0
    
    
def start_game():
  
    # create a new call table and a new player card and return them

    calls_list = create_calls_list()
    player_card = create_bingo_card()
    return calls_list, player_card

def simulate_game(player_card, calls_list):

    # simulate a bingo game till the player wins
    # return the total of calls needed to win

    is_winning_card = check_wining_card(player_card)
    calls = 0
    while is_winning_card == False:
        random_key, random_number = call_bingo_numbers(calls_list)
        update_calls_list(calls_list, random_key, random_number)
        update_player_card(player_card,random_key, random_number)
        calls += 1
        is_winning_card = check_wining_card(player_card)
    
    return calls

def main():
    
    #Starting situation
    calls_list, player_card = start_game()

    # Simulate 1,000 games and report the minimum, maximum and average number 
    # of calls that must be made before the card wins. 

    calls = []
    for _ in range(1000):
        calls.append(simulate_game(player_card, calls_list))
        calls_list, player_card = start_game()
    print(f'Minimum number of calls: {min(calls)}.')
    print(f'Maximum number of calls: {max(calls)}.')
    print(f'Average number of calls: {sum(calls)/ len(calls)}.')
   
    
if __name__ == '__main__':
    main()
