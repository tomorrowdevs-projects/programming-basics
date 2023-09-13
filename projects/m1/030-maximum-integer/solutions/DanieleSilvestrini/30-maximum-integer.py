#imports random module
import random

#making an empty list
lst = []  

# fills list with numbers between 1 and 100
for i in range(1, 101): 
    lst.append(i)

# shuffles the numbers in list
random.shuffle(lst) 

# chooses a number from list, stores in the variable "max" as the maximum value finded till now and prints it
max = random.choice(lst) 
print(f'\n{max} <===== chosen number\n')

# removes the number from list
lst.remove(max) 

# stores how many times maximum value has been changed
update = 0      

# iterates the whole list
for i in lst:  
# declares an if else statement that if number is grater than "max" riassings with the new value, print that it has been updated and then add one to "update", else prints the number as it is 
    if i > max:
        max = i
        print(f'{i} <== max update')
        update += 1
    else:
        print(i)
        
# prints a string that tells the maximum value founded and how many times the maximum value been changed
print(f'The maximum value found was {max}\nThe maximum value was update {update} times') 
