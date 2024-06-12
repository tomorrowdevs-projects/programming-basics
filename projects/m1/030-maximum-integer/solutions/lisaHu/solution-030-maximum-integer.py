#create a list to store numbers and create the first random number
import random
random_num = random.randint(1,100)
sequence = []
sequence.append(random_num)

#create variables of max value and set max of update to 0
max_value = random_num
max_encountered = 0
print('------------------------------------------------')
print(random_num)


#while loop that creates a new random number and adds to list
while True:
    random_num = random.randint(1, 100)
    sequence.append(random_num)
    
    #different cases if list stores more than 100 numbers, if new number is bigger than max value and if neither the last cases happened
    if len(sequence) == 100:
        break
    elif random_num > max_value:
        max_value = random_num
        max_encountered += 1
        print(str(max_value) + ' <--- UPDATE')
    else:
        print(random_num)
        continue

#print of the results
print('------------------------------------------------')
print('The maximum value found was ' + str(max_value))
print('The maximum value was updated ' + str(max_encountered) + ' times')