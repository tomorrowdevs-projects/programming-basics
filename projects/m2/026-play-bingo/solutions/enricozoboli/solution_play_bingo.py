import random
import create_card as cbc
import check_win as cw

def shuffle(l):
    for i in range(len(l)-1 , 1, -1):
        j = random.randint(0, i)  
        l[i], l[j] = l[j], l[i]
    return l 

def calls_list():
    """Return a list of every possible extraction in bingo game."""
    s = "BINGO"
    calls = []
    l =  1
    for c in s:
        for i in range(l, l+15):
            e = c + str(i)
            calls.append(e)
        l += 15
    shuffle(calls)
    return calls

def one_bingo_game():
    """
    Simulate a bingo game with only one card. The number 
    that as been called is replaced with a zero on the card.
    Return the count of total calls necessary to win the game.
    """
    count = 0
    player_card = cbc.create_card()
    list_of_calls = calls_list()
    for n in list_of_calls:
        k = n[0]
        v = int(n.replace(n[0], ""))
        if v in player_card[k]:
            ind =  player_card[k].index(v)
            player_card[k][ind] = 0
            if cw.check_win(player_card):
                return count
            else:
                count += 1
                
def thousand_bingo():
    """
    Simulates a thousand games each of them with only one card.
    Return the minum, maximum, and average count of calls 
    necessary to win each game.
    """
    winning_count = []
    for g in range(1000):
        count = one_bingo_game()
        winning_count.append(count)
    
    min_count = min(winning_count)
    max_count = max(winning_count)
    average_count = sum(winning_count)/ len(winning_count)
    return min_count, max_count, average_count


if __name__ == "__main__":
    min_count, max_count, average_count = thousand_bingo()
    print(f"Minimum number of calls in a game: {min_count}")
    print(f"Maxium number of calls in a game: {max_count}")
    print(f"Average number of calls in 1000 games: {average_count:.2f}")
