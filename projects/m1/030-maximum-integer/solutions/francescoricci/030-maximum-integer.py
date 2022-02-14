import random

maximum = 0
times = 0

for count in range(1,100):
    random_current = random.randint(1,100)
    if random_current > maximum:
        maximum = random_current
        times += 1
        print(f'{count} {random_current} <== Update')
    else:
        print(f'{count} {random_current}')

print(f'\nThe maximum value found was {maximum}')
print(f'The maximum value was updated {times} times')

