"""
In this exercise you will simulate 1,000 rolls of two dice. 
Begin by writing a function that simulates rolling a pair of six-sided dice. 
Your function will not take any parameters. 
It will return the total that was rolled on two dice as its only result. 
Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times. 
As your program runs, it should count the number of times that each total occurs. 
Then it should display a table that summarizes this data. 
Express the frequency for each total as a percentage of the number of rolls performed. 
Your program should also display the percentage expected by probability theory for each total. 
"""

from random import randint

def two_dice_sim():
    result_dict = dict()
    for i in range(0,1000):
        total_res = str((randint(1,6) + randint(1,6)))  #roll dice sim
        result_dict[total_res] = result_dict.get(total_res,0) + 1 #update value of key "total_res"(0 the first time,+1 for each rolls out)  
    return result_dict


# result of the simulation
result = two_dice_sim()
for k,v in result.items():
    print(f"number: {k}   nominal result: {v}   perc result: {round((v/1000)*100,2)}%")
