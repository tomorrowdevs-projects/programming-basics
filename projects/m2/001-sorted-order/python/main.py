
list_of_number = []

number = int(input("Insert a number. 0 to stop "))

while number != 0:
    list_of_number.append(number)
    number = int(input("Insert a number. 0 to stop "))

list_of_number.sort()

for number in list_of_number:
    print(number)