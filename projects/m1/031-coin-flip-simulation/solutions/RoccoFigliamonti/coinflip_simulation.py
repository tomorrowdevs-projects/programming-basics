"""
Create a program that uses a random number generator to simulate flipping a coin several times. 
The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails. 
Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur. Display an H each time the outcome is heads, and a T each time the outcome is tails, with all of the outcomes for one simulation on the same line. 
Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome. When your program is run it should perform the simulation 10 times and report the average number of flips needed. Sample output is shown below:
"""

from random import randint

flip_counter = []
flip_number = 10
for i in range(flip_number):
    #initialize list with 3 flips
    flip_list =[]
    for i in range(3):
        num = randint(0,1)
        if num == 0:
            num = "H"
        else:
            num = "T"
        flip_list.append(num)

    #other flips unitil the condition is reached
    while not (flip_list[-3] == flip_list[-2] == flip_list[-1]):
        num = randint(0,1)
        if num == 0:
            num = "H"
        else:
            num = "T"
        flip_list.append(num)
    print(f"{flip_list} {len(flip_list)} flips")

    #count how many flips
    flip_counter.append(len(flip_list))

average = sum(flip_counter)/flip_number
print(f"On average, {average} flips were needed")
    
