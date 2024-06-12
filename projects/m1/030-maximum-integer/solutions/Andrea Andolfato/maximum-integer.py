
import random

first_int = random.randrange(1,101)
counter = 0

while counter < 100:
    random_int = random.randrange(1,101)
    if random_int <= first_int:
        print(random_int)
    else:
        print(f'{random_int} <== Update')
        first_int = random_int
    counter += 1