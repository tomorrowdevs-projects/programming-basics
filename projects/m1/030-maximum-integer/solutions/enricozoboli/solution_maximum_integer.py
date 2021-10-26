import random

update = 0
maximum = random.randint(1,100)
print(maximum)

for i in range(100):
    number = random.randint(1, 100)
    if number  > maximum:
        maximum = number
        update += 1
        print(f"{number} <== update")
    else:
        print(number)
        continue
       
print(f"\nThe maximum value found was {maximum}")
print(f"The maximum value was updated {update} times")
