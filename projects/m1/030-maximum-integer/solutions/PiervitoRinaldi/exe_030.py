import random

max_number = random.randint(1, 100)
print(max_number)
count_max = 0
for n in range(100):
    new_number = random.randint(1, 100)
    if new_number > max_number:
        max_number = new_number
        count_max += 1
        print(new_number, ' <== Update')
    else:
        print(new_number)

print('The maximum value encounter is: ', max_number)
print('The maximum value was update ', count_max, 'times')


