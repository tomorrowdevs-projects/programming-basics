while True:
    factor = 2
    n = int(input('Enter an integer (2 or greater): '))
    print('The prime factors of ' + str(n) + ' are:')
    if n < 2:
        print('Please insert a number greater than two')
        continue
    while factor <= n:
        if n % factor == 0:
            print(factor)
            n /= factor
        else:
            factor += 1