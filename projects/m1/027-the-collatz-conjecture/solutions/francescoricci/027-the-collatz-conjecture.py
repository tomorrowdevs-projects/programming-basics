#exercise 027 collatz conjecture
# https://it.wikipedia.org/wiki/Congettura_di_Collatz

def isEven(number):
    return True if not(number % 2) else False

n = 6
while (n>1):
    print(n)
    if isEven(n):
        n //= 2
    else:
        n = 3 * n + 1
print(n)
