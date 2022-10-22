import random

def rolling_dice():
    d_one = random.randint(1,6)
    d_two = random.randint(1,6)
    roll_total = d_one + d_two

    return roll_total

frequencies = []
count_twelve = 0
count_rolls = 0

for roll in range(1, 1001):
    count_rolls += 1
    if rolling_dice() == 12:
        count_twelve += 1
        frequency = f"{(count_twelve/count_rolls)*100:.2f}"
        frequencies.append(frequency)

print(frequencies)



