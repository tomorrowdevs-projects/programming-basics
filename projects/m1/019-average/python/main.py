while True:
    number = int(input('type a number or 0 to end: '))
    if number == 0:
        print(result)
        break  
    else:
        new_number = int(input('type a number or 0 to end: '))
        result = number + new_number
 