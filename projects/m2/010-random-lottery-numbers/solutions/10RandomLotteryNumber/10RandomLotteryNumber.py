#In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to the 6 numbers between 1 and 49 that are drawn by the lottery organizer. Write a program that generates a random selection of 6 numbers for a lottery ticket. Ensure that the 6 numbers selected do not contain any duplicates. Display the numbers in ascending order.

import random

#by using a set I avoid duplicates. I run a while loop to make set filled with 6 items without duplicate and then I sort values.
def randomNumber():
  randomSet=set([])
  while len(randomSet)<6:
    n = random.randint(1,49)
    randomSet.add(n)
 
  return sorted(randomSet)
 
print(randomNumber())