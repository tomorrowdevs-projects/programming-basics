import random

# List to print the average flip number to obtain 3 Head or 3 Tail
flip_count = []

for i in range(10):
    # Initialize the variable that must be empy or 0 at the start of every while cycle
    flips_report = ''
    last_flip = ''
    consecutive_flip = 0
    flip_counter = 0

    while consecutive_flip < 2:
        flip_counter += 1
        coin_flip = random.randrange(0, 2)

        if coin_flip == 1:
            coin_result = 'H '
        else:
            coin_result = 'T '

        flips_report = flips_report + coin_result

        if coin_result == last_flip:
            consecutive_flip += 1
        else:
            consecutive_flip = 0

        last_flip = coin_result

        if consecutive_flip == 2:
            print(f'{flips_report} ({flip_counter} flips)')

    flip_count.append(flip_counter)

flip_average = (sum(flip_count)) / 10
print(f'On average, {flip_average} flips were needed.')