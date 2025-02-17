while True:
    number = int(input('Enter number: '))
    if number == 0:
        break
    print(number)
    while True:

        if number % 2 == 0 :
            number //= 2
            print(number)
            if number == 1:
                break
            else:
                continue
        else:
            number = (number * 3) + 1
            print(number)
            continue



