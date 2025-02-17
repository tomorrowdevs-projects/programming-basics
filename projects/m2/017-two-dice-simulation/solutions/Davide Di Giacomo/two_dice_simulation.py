#your function will return the total that was rolled on two dice as its only result.
#Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times
#Express the frequency for each total as a percentage of the number of rolls performed. 
#Your program should also display the percentage expected by probability theory for each total.

import random

def rolls_dice():
    dice=[1, 2, 3, 4, 5, 6]
    #roll the first dice
    dice1=random.choice(dice)
    #roll the second 
    dice2=random.choice(dice)
    total=dice1+dice2
    return total

def main():
    times=[]
    result=[]
    #create list for n rolls
    for x in range (1, 1001):
        times.append(x)
        #create a list for 1000 results
        total=rolls_dice()
        result.append(total)
    #create a dictionary
    d1=dict(zip(times, result))
    #report probability theory
    theory=[0, 1, ]
    #probability results from 2 to 7
    for x in range (1, 7):
        probability=x/36*100
        theory.append(round(probability, 2))
    #probability result form 8 to 12
    y=5
    for x in range (8, 13):
        probability=y/36*100
        theory.append(round(probability, 2))
        y-=1
    #percentage of the number of rolls performed
    real_result=[0, 1]
    for x in range(2,13):
        realistic=(sum(value == x for value in d1.values()))/10
        real_result.append(realistic)
    for x in range (2, 13):
        print(f"For theory, the result {x} has this probability: {theory[x]} %")
        print(f"In reality, the result {x} has this probability: {real_result[x]} %\n ")
    

(main())