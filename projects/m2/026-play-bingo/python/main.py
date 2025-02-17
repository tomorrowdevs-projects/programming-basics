import bingo

def average(l: list) -> float:

    '''
    return the average of 'l' list's number
    '''

    sum = 0
    for i in range(len(l)):
        sum += l[i]

    return sum / len(l)

def min(l: list) -> int:

    '''
    return the min of 'l' list's number
    '''

    min = l[0]

    for i in range(1,len(l)):
        if l[i] < min:
            min = l[i]

    return min

def max(l: list) -> int:

    '''
    return the max of 'l' list's number
    '''

    max = l[0]

    for i in range (1,len(l)):
        if l[i] > max:
            max = l[i] 
    
    return max


total_wins = list()

for i in range(1000):

    c = bingo.create_bingo_card()

    n = bingo.call_number()

    total_wins.append(bingo.cross_out_bingo_card(c,n))

print("Min calls to win on 1000 games: {}".format(min(total_wins)))

print("Max calls to win on 1000 games: {}".format(max(total_wins)))

print("Average calls to win on 1000 games: {:.0f}".format(average(total_wins)))




