# Store a collection of values into a list and evaulate the averege when the USER digit '0'
num_list = []

while True:
    number = int(input('Enter the values to obtain the averege (type "0" to quit): '))
    if number == 0:
        average = sum(num_list) / len(num_list)
        print(f'The average of your input is {average}')
        break
    
    num_list.append(number)