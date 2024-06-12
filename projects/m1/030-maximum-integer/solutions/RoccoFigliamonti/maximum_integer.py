"""
Create a program that begins by selecting a random integer between 1 and 100. 
Save this integer as the maximum number encountered so far. 
After the initial integer has been selected, generate 99 additional random integers between 1 and 100. 
Check each integer as it is generated to see if it is larger than the maximum number encountered so far. 
If it is then your program should update the maximum number encountered and count the fact that you performed an update. 
Display each integer after you gen- erate it. Include a notation with those integers which represent a new maximum.

After you have displayed 100 integers your program should display the maximum value encountered, along with the number of times the maximum value was updated during the process. 
Partial output for the program is shown below, with... representing the remaining integers that your program will display. 
Run your program several times. 
Is the number of updates performed on the maximum value what you expected?
"""

from random import randint

max_num = randint(1,100)
counter = 0
print(max_num)

for i in range(100):
    number = randint(1,100)
    if number > max_num:
        max_num = number
        counter += 1
        print(f"{number} update")
    else:
        print(number)
    
print(f"The max number is {max_num}")
print(f"Number of updates: {counter}")

