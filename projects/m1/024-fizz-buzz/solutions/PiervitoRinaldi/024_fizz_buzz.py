for number in range(100):
    if number % 3 == 0 and number % 5 == 0:
        number = 'FIZZ BUZZ'
        print(number)
    elif number % 3 == 0:
        number = 'FIZZ'
        print(number)
    elif number % 5 == 0:
        number = 'BUZZ'
        print(number)
    else:
        print(number)