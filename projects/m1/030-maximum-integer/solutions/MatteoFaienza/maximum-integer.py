# This exercise examines the process of identifying the maximum value in a collection of integers.
import random

count = 100
number = 0
update_count = 0

while count != 0 :

    number_list = random.randint(1,100)

    if number_list > number :
        print(number_list ,'<------ update')
        number = number_list
        count -= 1
        update_count += 1
    
    else :
        print(number_list)
        count -= 1 

print('The max value found is',number)  
print('The maximum value was updated',update_count,'times') 