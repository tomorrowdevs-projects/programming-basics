import random

#variables
number_list = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 00, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2]
red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

#random number generator
number = random.choice(number_list)
print (f"The spin resulted in {number}...")
print (f"pay {number}")

#Red/Black 
if number in red:
    print ("pay Red")   
elif number in black:
    print ("pay Black")
    
#Odd/Even
if number % 2 == 0 and number != 0 and number != 00:
    print ("pay Even")  
elif number % 2 != 0 and number != 0 and number != 00:
    print ("pay Odd")
    
#1 to 18/19 to 36
if number < 19 and number != 0 and number != 00:
    print ("pay 1 to 18")
elif number > 18:
    print ("pay 19 to 36") 