while True:
    user_input = int(input('type a postive number or a negative number or a 0 to end: '))
    if user_input <= 0:
        break
    else:
        number = user_input
        sequence = str(number) 
        while number != 1:
            if number % 2 == 0:
                number = number // 2
                sequence += ' ' + str(number)
            else:
                number = number * 3 + 1
                sequence += ' ' + str(number)
        print(sequence)

