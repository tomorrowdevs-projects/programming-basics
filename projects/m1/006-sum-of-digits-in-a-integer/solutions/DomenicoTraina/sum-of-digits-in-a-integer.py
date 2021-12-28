
number_string = str (input ("Please enter a number: "))

number_of_digits=(len(number_string))

sum_of_digits=0

for i in range(number_of_digits):    
    sum_of_digits=sum_of_digits+int(number_string[i])
    
print("Sum of {} digits is {} " .format(number_of_digits,sum_of_digits))