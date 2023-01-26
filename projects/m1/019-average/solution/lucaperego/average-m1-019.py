

# defining Variables – outside the While-Cicle


number = 1

addition = 0

count = 0


while(number != 0):
    
    number = int(input("Insert a number - and press 0 to calculate the result ---> "))
    
    addition = addition + number
    count += 1

if number == 0:
    
    
    average = addition / (count-1) # (count -1) ---> because the last count - (number = 0) - must not be calculated
                                   # this condition wasn't put in the cycle While(True) intrreupted by a break
                                   # to avoid this problem.
print(average)
    