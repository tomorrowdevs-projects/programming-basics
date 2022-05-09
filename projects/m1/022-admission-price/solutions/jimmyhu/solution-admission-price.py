guest_list = []
guest_age = input('Enter the age: ')
guest_list.append(guest_age)
while guest_age != ' ':
    add = input('Enter the age (blank for if there are no more memeber in the group): ')
    if add == ' ':
        break
    else:
        guest_list.append(add)
total = 0
guest_int = [int(item) for item in guest_list]
for x in guest_int:
    if x <= 2:
        total += 0
    elif x > 2 and x <= 12:
        total += 14
    elif x >= 65:
        total += 18
    else:
        total += 23
print('Total is = $' + '%.2f' %total)