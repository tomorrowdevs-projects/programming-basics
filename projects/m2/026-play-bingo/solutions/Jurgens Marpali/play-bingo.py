import random
from check_win import check_win
from create_card import bingo_card

def call_list():
    bingo_calls = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': []}
    min = 1
    max = 16
    for key in bingo_calls:
        bingo_calls[key] = [n for n in range(min, max)]
        random.shuffle(bingo_calls[key])
        min += 15
        max += 15
    return bingo_calls

def numbers(call_list):
    random_key = random.choice(list(call_list))
    random_number = random.choice(call_list[random_key])
    return random_key, random_number

def update_calls(call_list,key,value):
    call_list[key].remove(value)
    if call_list[key] == []:
        call_list.pop(key)
    return call_list

def update_player_card(card, key, value):
    card_row = card[key]
    if value in card_row:
        card_row[card_row.index(value)] = 0

def game():
    calls_list = call_list()
    player = bingo_card()
    return calls_list, player

def simulate_game(player, calls_list):
    win_card = check_win(player)
    call = 0
    while win_card == False:
        random_key, random_number = numbers(calls_list)
        update_calls(calls_list, random_key, random_number)
        update_player_card(player, random_key, random_number)
        call += 1
        win_card = check_win(player)
    
    return call

def main():
    call_list, player = game()

    calls = []
    for _ in range(1000):
        calls.append(simulate_game(player, call_list))
        call_list, player = game()
        print(f"Minimum calls : {min(calls)}")
        print(f"Max Calls: {max(calls)}")
        print(f"Average calls: {sum(calls) / len(calls)}")

if __name__ == "__main__":
    main()





















    

