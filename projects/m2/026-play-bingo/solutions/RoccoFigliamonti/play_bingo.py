"""In this exercise you will write a program that simulates a game of Bingo for a single card.
Begin by generating a list of all of the valid Bingo calls (B1 through O75).
Once the list has been created you can randomize the order of its elements by calling the shuffle function in the random module. 

Then your program should consume calls out of the list and cross out numbers on the card until the card contains a winning line. 
Simulate 1,000 games and report the minimum, maximum and average number of calls that must be made before the card wins. """


from random import sample, shuffle


def create_card():
    card = {"B": [x for x in sample(range(1,16),5)],
            "I": [x for x in sample(range(16,31),5)],
            "N": [x for x in sample(range(31,46),5)],
            "G": [x for x in sample(range(46,61),5)],
            "O": [x for x in sample(range(61,76),5)]}
    return card


def winning_check(card:dict()):
    for k in card.keys():
        if card[k][0] == card[k][1] == card[k][2] == card[k][3] == card[k][4] == 0: #horizontal check
            return True
    for j in range(5):
        if card["B"][j] == card["I"][j] == card["N"][j] == card["G"][j] == card["O"][j] == 0: #vertical check
            return True
    if card["B"][0] == card["I"][1] == card["N"][2] == card["G"][3] == card["O"][4] == 0 \
        or card["B"][4] == card["I"][3] == card["N"][2] == card["G"][1] == card["O"][0] == 0: #diagonal check ???????
            return True
    else:
        return False
 

def cross_number(card:dict(),num:int):
    for k in card.keys():
        for j in range (5):
            if card[k][j] == num:
                card[k][j] = 0
    return card



#1 game simulation with printing
"""
numbers = [x for x in range(1,76)]
shuffle(numbers)
print(numbers)

card = create_card()
for k,v in card.items():
    print(k,v)

counter = 0
num_of_calls = []
for num in numbers:
    cross_number(card,num)
    winning_check(card)
    counter += 1
    if winning_check(card) == True:
        break    
num_of_calls.append(counter)

print("")
for k,v in card.items():
    print(k,v)
print(num_of_calls)
"""


#1000 games simulation
num_of_calls = [] 
for i in range(1000):
    numbers = [x for x in range(1,76)]
    shuffle(numbers)
    card = create_card()
    counter = 0
    for num in numbers:
        cross_number(card,num)
        winning_check(card)
        counter += 1
        if winning_check(card) == True:
            break    
    num_of_calls.append(counter)

print(num_of_calls)
print(f"The max number of calls was: {max(num_of_calls)}")
print(f"The min number of calls was: {min(num_of_calls)}")
print(f"The average number of calls was: {sum(num_of_calls)/len(num_of_calls)}")
