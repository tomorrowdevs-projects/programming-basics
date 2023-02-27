import random

lottery_numbers = []

while len(lottery_numbers) < 6:
    number = random.randint(1,49)
    if number not in lottery_numbers:
        lottery_numbers.append(number)

lottery_numbers.sort()

print("Number drawn: ")
print(lottery_numbers)