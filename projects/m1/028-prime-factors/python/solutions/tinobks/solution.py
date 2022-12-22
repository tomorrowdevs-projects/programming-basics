n = int(input("Enter an integer (2 or greater): "))
factor = 2

if n < 2:
    print("Error: you can't enter an integer less than 2.")
else:
    print(("The prime factors of {} are: ") .format(n))

while factor <= n:
    if n % factor == 0:
        print(factor)
        n = n // factor
    else:
        factor += 1
