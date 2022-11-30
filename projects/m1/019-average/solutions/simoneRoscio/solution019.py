"""In this exercise you will create a program that computes the average of a collection of values entered by the user. 
The user will enter 0 as a sentinel value to indicate that no further values will be provided. Your program should display an appropriate
error message if the first value entered by the user is 0.

Hint: Because the 0 marks the end of the input it should not be included in the average."""

# Store a collection of values into a list and evaulate the averege when the USER digit '0'
num_list = []

while True:
    number = int(input('Enter the values to obtain the averege (type "0" to quit): '))
    if number == 0:
        average = sum(num_list) / len(num_list)
        print(f'The average of your input is {average}')
        break
    
    num_list.append(number)
    


