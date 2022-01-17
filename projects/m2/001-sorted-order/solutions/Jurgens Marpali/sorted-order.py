sorted_list = []

while True:
    user = input("Insert a number, insert 0 to stop")
    if user == '0':
        break
    else:
        sorted_list.append(user)

print(sorted(sorted_list))