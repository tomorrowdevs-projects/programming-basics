number = int(input("Enter a decimal number: "))

while number != 0:
    conversion = []
    cipher = number % 2
    conversion.append(str(cipher))
    number = number // 2
    print(conversion[0], end="")