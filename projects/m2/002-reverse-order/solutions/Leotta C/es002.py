list = []
number = int(input("Enter an integer: "))
while number != 0:
    list.append(number)
    number = int(input("Enter an integer: "))
new_list = sorted(list, reverse=True)

for item in new_list:
    print(item)