list = []

number = int(input("Insert a Number. Use 0 to stop program but not at this step: "))
while number == 0:
    print("You can't add as first argument a zero")
    number = int(input("Insert a Number. Use 0 to stop program: "))
list.append(number)

while number != 0:
    number = int(input("Insert a Number. Use 0 to stop program: "))
    if number != 0:
        list.append(number)

average = sum(list) / len(list)
print(average)