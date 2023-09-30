# Maximum Integer
# This exercise examines the process of identifying the maximum value in a collection of integers.
# Each of the integers will be randomly selected from the numbers between 1 and 100.
# The collection of integers may contain duplicate values, and some of the integers between 1 and 100 may not be present.
import random
maximum = random.randint(1, 100)
print(maximum, "<== Maximum initial value")
numbers_generated = update_count = 0
while numbers_generated < 100:
    new_number = random.randint(1, 100)
    if new_number > maximum: 
        maximum = new_number
        print(maximum, "<== Update")
        update_count += 1
    else: print(new_number)
    numbers_generated += 1
print("The maximum value found was", maximum)
print("The maximum value was updated", update_count, "times")