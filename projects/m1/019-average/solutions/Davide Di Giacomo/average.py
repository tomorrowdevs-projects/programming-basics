numbers = [] 
number = int(input("Insert numbers to calculate average, insert '0' to finish input:"))
numbers.append(number)
if number == 0:
    print ("Error! You can't start with '0'!")
    
else:
    number = int(input("Insert numbers to calculate average, insert '0' to finish input:"))
    numbers.append(number)
    while number != 0:
        number = int(input("Insert numbers to calculate average, insert '0' to finish input:"))
        numbers.append(number)
    
average = sum(numbers)/(len(numbers) - 1)
print (f"The average is: {int(average)}!")
    
