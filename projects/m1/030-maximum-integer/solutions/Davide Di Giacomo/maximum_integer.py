import random
import numpy as np
is_max = []
abc=1 
while len(is_max) != 100:
    number = random.randint(1, 100)
    is_max.append(number)
    while number >= np.max(is_max):
            print(f"{number} <== Update")
            abc+=1
            break
    else:
            print(number)
else:
    print(f"The maximum value found was: {np.max(is_max)}")
    print(f"The maximum value was updated {abc} times")