total_cost = 0
people = 0

while True:
    age = input('inserte the age of the guest: ')
    if age == '':
        break
    else:
        age = int(age)
        if age <= 2:
            cost = 0
        elif 3 <= age <= 12:
            cost = 14
        elif 13 <= age < 64:
            cost = 23
        else:
            cost = 18

    people += 1
    total_cost += cost


print('Total price of your group of ' + str(people) + ' people is ' + '{:.2f}'.format(total_cost) + ' $')