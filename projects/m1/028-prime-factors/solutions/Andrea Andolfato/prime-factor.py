

number = int(input("Input an integer: "))
factors = []

while number % 2 == 0:
    factors.append(2)
    number //= 2

while number % 3 == 0:
    factors.append(3)
    number //= 3

print("The prime factors are: ", factors)


