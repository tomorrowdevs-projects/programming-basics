# imports random module
import random 

# declares a variable were store the average number of flips 
average = 0 

# loop that makes 10 lists were store coin's flips
for i in range(0, 10): 
    lst = [] 
# while cycle fills the list with T or H (tails or heads) until were reached three same flips
# then prints the list joining it in a string, printing also numbers of flips
    while not (len(lst) >= 3 and lst[-1] == lst[-2] and lst[-2] == lst[-3]): 
        rdm = random.randint(0,10)                                           
        if 5 <= rdm >= 0:
            lst.append('T')
        else:
            lst.append('H')
    average += (len(lst)) 
    print(' '.join(lst) + f' ({len(lst)} flips)')

# prints the average coin's flips needed to reach the target
print(f'On average, {round((average / 10), 1)} flips were needed') 