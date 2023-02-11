

import random

print(random.randint(1,100))
for number in range(1,100):
    if number % 3 == 0 and number % 5 == 0:
        print("fizz-buzz:", number)
    elif number % 3 == 0 and number % 5 != 0 :
        print("fizz:", number)
    elif number % 3 != 0 and number % 5 == 0:
        print("buzz:", number)
    else:
        print(number)