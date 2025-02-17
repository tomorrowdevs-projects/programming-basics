def sorted_order():
    list_number = []

    while True:
        number = int(input('Enter integer: '))
        list_number.append(number)
        if number == 0:
            list_number.remove(0)
            break

    list_number.sort()
    for number in list_number:
        print(number)

sorted_order()
