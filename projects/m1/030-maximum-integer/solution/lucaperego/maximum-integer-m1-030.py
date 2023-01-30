

from random import randint 


maximum = int(randint(1, 100))


count = 0


for el in range(1, 100):
    new_number = randint(1, 100)
    if new_number > maximum:
        maximum = new_number
        count += 1
        print(f"{new_number}: just updated as MAXIMUM")
    
    else:
        print(f"{new_number} *** ")
        
print(f"Last MAXIMUM: {maximum} - updated {count} Times")