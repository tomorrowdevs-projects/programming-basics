
#function that returns 6 random numbers for the lottery 

import random

def lottery_numbers():
    randlist = random.sample(range(1,50),k=6)                 # sample makes sure that we don't have duplicates numbers, k defines how many numbers we want to print
    list_sort = sorted(randlist)
    print(list_sort)


lottery_numbers()