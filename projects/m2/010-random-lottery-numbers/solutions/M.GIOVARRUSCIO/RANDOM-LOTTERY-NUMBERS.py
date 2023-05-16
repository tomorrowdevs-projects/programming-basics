"""
In order to win the top prize in a particular lottery, one must match all 6 numbers
on his or her ticket to the 6 numbers between 1 and 49 that are drawn by the lottery organizer.
Write a program that generates a random selection of 6 numbers for a lottery ticket.
Ensure that the 6 numbers selected do not contain any duplicates.
Display the numbers in ascending order.
"""
import random
def genera(ins):
    while len(ins) < 7:
        a = random.randint(1, 49)
        ins.add(a)
    ticket = list(ins)
    ticket.sort()
    return ticket

if __name__=='__main__':
    insieme = set()
    print(genera(insieme))
