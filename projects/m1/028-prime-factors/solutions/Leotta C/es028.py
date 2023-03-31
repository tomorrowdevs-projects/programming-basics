n = int(input("Enter a number equal or greater than 2: "))
if n < 2:
    print("Error")


def factor(n):
    factor = 2
    while factor <= n:
        if n % factor == 0:
            return factor
        else:
            factor = factor + 1

print(f"The prime factors of {n} are:")
while n >=2:
    print(factor(n))
    n = n / factor(n)
