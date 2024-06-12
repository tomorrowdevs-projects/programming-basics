factor = 2
number = int(input('Enter your number grater than 2: '))
if number <= factor:
    print('Error the number must be greater than 2')
else:
    while factor <= number:
        if number % factor == 0:
            print(factor)
            number = number / factor
        else:
            factor += 1        