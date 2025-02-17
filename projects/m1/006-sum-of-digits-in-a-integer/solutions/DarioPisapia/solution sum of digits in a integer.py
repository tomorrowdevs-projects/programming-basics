number = input("Insert a four digits number: ")

result = 0
for dgt in number:
    result += int(dgt)

print(f"The sum of all the digits of your number is: {result}")
