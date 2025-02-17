def reverse_order():
    list_number = []

    while True:
        number = int(input('Enter integer: '))
        if number != 0:
            list_number.append(number)
        elif number == 0:
            break
    
    list_number.reverse()
    for number in list_number:
        print(number)

reverse_order()