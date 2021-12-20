while True:
    number = int(input("Insert a number: "))
    factor = 2
    if number == "":
        break

    if int(number) < 2:
        print("Error! write a number greater than 2")
        

    while number > factor:
        if number % factor == 0:
            number //= factor
            print(factor)
        else:
            factor += 1
    
    
        
