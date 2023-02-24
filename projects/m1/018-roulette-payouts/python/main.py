#import package that can help randomizing number
import random
 
# initializing list, 0 and 00 are string, because 00 can be displayed as a number
test_list = ['0', '00', 1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17,
18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
 
# printing original list
print("All the number are : " + str(test_list))
 
# using random.choice() function to
# get a random number
random_num = random.choice(test_list)
 
# printing random number
print("The spin resulted in : " + str(random_num)) 


#condition where random number is 0 or 00 

if random_num == '0':
    print("Pay 0")
elif random_num == '00':
    print ("Pay 00")
else:
    print(f'Pay {random_num}')
    
#condition where random number is odd or even, are everywhere included 0 and 00 condition
    
if int(random_num) % 2 == 0 and random_num not in ['00', '0']:
    print('Pay Even')
elif int(random_num) % 2 == 1 and random_num not in ['00','0']:
    print('Pay Odd')

   
#condition where random number is red or black    
if random_num in [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36] and random_num not in ['00', '0']:
    print("Pay Red")
    
elif random_num not in [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36] and random_num not in ['00', '0']:
    print("Pay Black")

#condition where random number is in the first or the second part of the list    
if random_num in test_list[0:19] and random_num not in ['00', '0']:
    print("Pay 1 to 18")
elif random_num in test_list[20:] and random_num not in ['00', '0']:
    print("Pay 19 to 36")