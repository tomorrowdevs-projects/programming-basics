n = int(input("Enter an integer (2 or greater): "))
print("The prime factor of {} are:".format(n))

if n <2:
    print("Input error! You must insert an integer number equal or greater 2")
else:
    factor = 2

    while factor <= n:
        if n % factor == 0:
            print(factor)
            n = n // factor
        else:
            factor +=1


