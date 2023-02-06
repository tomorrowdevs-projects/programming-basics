number = int(input("Insert an integer number. Enter 0 or less to quit: "))

while number>0:
    while number != 1:
        if number % 2 == 0:
            number = number // 2
        else:
            number = number * 3 + 1
        print(number)
    number = int(input("Insert an integer number. Enter 0 or less to quit: "))
    


