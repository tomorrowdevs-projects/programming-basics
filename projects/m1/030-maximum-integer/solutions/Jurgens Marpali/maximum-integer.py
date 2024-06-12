import random

up = 0
max = random.randint(1,100)

for x in range(1, 100):
    num = random.randint(1,100)
    if num > max:
        max = num
        up += 1
        print (f"{max} Update!")
    else:
        print(str(num))

print(f"The highest value found was {max}.")
print(f"The number was updated {up} times.")