numbers = []
while 0 not in numbers:
    number = int(input('Enter the number: '))
    if number == 0 and len(numbers) == 0:
        print('error')
        break
    elif number == 0:
        result = sum(numbers) / len(numbers)
        print('The Average of the list is: ' "%.2f" %result)
        break
    numbers.append(number)
