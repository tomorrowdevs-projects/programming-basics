import random

high_number = random.choice(range(1,101))

update = 0

for i in range(1,100):
    number = random.choice(range(1,101))
    if number > high_number:
        high_number = number
        print(f'{number} <== update')
        update += 1
    else:    
        print(number)

print(f'The maximum value found was {high_number} and was updated {update} times ')

