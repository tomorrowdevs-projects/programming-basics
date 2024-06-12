"""
In this exercise we will mark that a number has been
called by replacing it with a 0 in the Bingo card dictionary.
Write a function that takes a dictionary representing a Bingo card as its only
parameter. 
If the card contains a line of five zeros (vertical, horizontal or diagonal) then your function should return True, indicating that the card has won. 
Otherwise the function should return False.
"""

from random import sample


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
         

card1 = {"B":[x for x in sample(range(1,16),5)],
        "I": [x for x in sample(range(16,31),5)],
        "N": [x for x in sample(range(31,46),5)],
        "G": [0,0,0,0,0],
        "O": [x for x in sample(range(61,76),5)]}

card2 = {"B":[0]+[x for x in sample(range(1,16),4)],
        "I": [0]+[x for x in sample(range(16,31),4)],
        "N": [0]+[x for x in sample(range(31,46),4)],
        "G": [0]+[x for x in sample(range(46,61),4)],
        "O": [0]+[x for x in sample(range(61,76),4)]}

card3 = {"B":[0,2,5,6,8],
         "I":[16,0,17,20,22],
         "N":[33,32,0,40,38],
         "G":[50,48,52,0,58],
         "O":[70,65,73,66,0]}

card4 = {"B":[11,2,5,6,8],
         "I":[16,0,17,20,22],
         "N":[33,32,0,40,38],
         "G":[50,48,52,0,58],
         "O":[70,65,73,66,0]}

print(card1)
print(winning_check(card1))

print(card2)
print(winning_check(card2))

print(card3)
print(winning_check(card3))

print(card4)
print(winning_check(card4))



card5 = {"B":[11,2,5,6,8],
         "I":[16,0,17,20,22],
         "N":[33,32,0,40,38],
         "G":[50,48,52,0,58],
         "O":[70,65,73,66,0]}
print(card5)
num1 = 11
print(cross_number(card5,num1))
num2 = 22
print(cross_number(card5,num2))





