while True:
    n = int(input("Insert a +1 value (or a <= 0 to exit): "))
    if n <= 0:
        break
    print(n, end=' ')
    while n != 1:
        if n % 2 == 0:
            n //= 2
        else:
            n = n * 3 + 1
        print(n, end=' ')
    print()