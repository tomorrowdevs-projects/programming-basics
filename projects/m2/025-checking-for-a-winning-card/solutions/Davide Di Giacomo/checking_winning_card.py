#Write a function that takes a dictionary representing a Bingo card as its only parameter.
#If the card contains a line of five zeros (vertical, horizontal or diagonal) then your function should return True
#main program demonstrates your function by creating several Bingo cards and indicating if they contain a winning line.
#import your solution to Exercise "Create a Bingo Card" when completing this exercise.

#bring a random number between 1-75 and with a cicle check if it is in a line in bingo card and change the number with 0
#check with a function if in line(vertical, horizontal or diagonal) there are 5 zero and return true
#print results with a function

import create_a_bingo_card 
import random

def extraction():
    #import solution to Exercise "Create a Bingo Card"
    bingo_cards=create_a_bingo_card.bingo()
    #create a list with all numbers
    numbers=[]
    for x in range(1, 76):
        numbers.append(x)
    #with a cicle bring a random numbers until one line is with 5 zero
    for x in range(75):
        numb=random.choice(numbers)
        for key, value in bingo_cards.items():
            #check if random number is in a line in bingo card and change the number with 0
            if numb in value:
                value = [0 if item == numb else item for item in value]
                bingo_cards[key]  =  value
    return bingo_cards

#verify if horizontal line win
def horizontal(bingo_cards):
    #check if in horizontal line there are 5 zero
    for key, value in bingo_cards.items():
        if value==[0, 0, 0, 0, 0]: return True
    else: return False

#verify if vertical line win
def vertical(bingo_cards):
    #check if in vertical line there are 5 zero
        check=0
        for count in range(5):
            for key, value in bingo_cards.items():
                if value[count]==0:
                        check+=1
                if check==5: return True
            check=0
        else: return False

#verify if diagonal1 line win       
def diagonal_1(bingo_cards):
    #check if in diagonal1 line there are 5 zero with a counter
    check=0
    count=0
    for key, value in bingo_cards.items():
        if value[count]==0:
                check+=1
                count+=1
        if check==5: return True
    else: return False
    
#verify if diagonal2 line win       
def diagonal_2(bingo_cards):
    #check if in diagonal2 line there are 5 zero with a counter
    check=0
    count=4
    for key, value in bingo_cards.items():
        if value[count]==0:
                check+=1
                count-=1
        if check==5: return True
    else: return False
                
#print result and who is the winner
def check_victory():
    bingo_cards=extraction()
    for item in bingo_cards:
        print("{}: {}".format(item,bingo_cards[item]))
    if horizontal(bingo_cards)==True: print("You win, horizontal Bingo!")
    elif vertical(bingo_cards)==True: print("You win, vertical Bingo!")
    elif diagonal_1(bingo_cards)==True: print("You win, diagonal Bingo!")
    elif diagonal_2(bingo_cards)==True: print("You win, diagonal Bingo!")
    else: print("You lose!")

if __name__ == "__main__": 
    #run it for 10 times to find all possible results
    for i in range(10):
        check_victory()