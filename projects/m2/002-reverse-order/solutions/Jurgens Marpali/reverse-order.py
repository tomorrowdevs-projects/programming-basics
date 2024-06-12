reversed_list = []

while True:
    user = input("Insert the numbers, and insert 0 to interrupt: ")
    if user == '0':
        break
    else:
        reversed_list.append(user)

print(reversed_list[::-1])