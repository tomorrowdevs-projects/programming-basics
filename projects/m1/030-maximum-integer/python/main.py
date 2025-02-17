import random

number = random.randint(1,100)
print(number,"<--- Update")
max = number
update_counter = 1

for index in range(1,100):
    number = number = random.randint(1,100)
    if number > max:
        print(number,"<--- Update")
        max = number
        update_counter += 1
    else:
        print(number)

print("The maximum value found was {}".format(max))
print("The maximum value was update {} times".format(update_counter))

