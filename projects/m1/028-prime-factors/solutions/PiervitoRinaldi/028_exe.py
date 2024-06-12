while True:
    number = int(input('Enter number grater than 2: '))
    factor = 2

    if number < factor:
        print('ERROR: Enter number grater than 2!')
        continue
   
    else:
        while factor <= number:
            if number % factor == 0:
                number //= factor
                print(factor)

            else:
                factor += 1

                
            

