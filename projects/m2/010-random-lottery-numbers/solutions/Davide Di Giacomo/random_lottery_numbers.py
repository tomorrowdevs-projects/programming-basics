#Write a program that generates a random selection of 6 numbers between 1 and 49
#numbers selected do not contain any duplicates
#Display the numbers in ascending order
#create an array with numbers between 1 and 49
#bring 6 random numbers from array and put in a list, if a number is already in a list bring another one.
#print a sorted list
import random

#create an array with numbers between 1 and 49
def lottery_1_49():
    numbers=[]
    for x in range(1,50):
        numbers.append(x)
    return numbers

#bring 6 random numbers from array and put in a list     
def ticket():
    lottery=lottery_1_49()
    ticket=[]
    number = random.choice(lottery)
    for i in range(1, 7):
        ticket.append(number)
        number = random.choice(lottery)
        #if a number is already in a list bring another one.
        if number in ticket:
            number = random.choice(lottery)
    #return a sorted list
    return sorted(ticket)

print(ticket())