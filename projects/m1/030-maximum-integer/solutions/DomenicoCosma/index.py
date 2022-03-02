
import random

max_num = 1
update_time = 0
randomlist = []

for i in range(0, 100):
    n = random.randint(1, 100)
    randomlist.append(n)
    if n > max_num:
       max_num = n
       update_time +=1
print(f'The maximum value found was: {max_num}')
print(f'The maximum value was updated {update_time} times')