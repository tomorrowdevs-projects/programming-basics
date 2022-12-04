
number = int(input("Please enter a number: "))
while number != 1:
    if number % 2 == 0:
        number /= 2
        print(number)
    else:
        number = (number * 3 + 1)
        print(number)