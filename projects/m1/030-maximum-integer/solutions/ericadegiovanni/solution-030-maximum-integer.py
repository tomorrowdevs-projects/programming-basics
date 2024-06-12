import random 

# the program selects a random integer between 1 and 100. 
random_int = max_int = random.randint(1, 100)
count = 0

#generate 99 additional random integers between 1 and 100. 
print('```')
for n in range(1, 100):
    n = random.randint(1, 100) 

    if (n > max_int):
        max_int = n # update the mximum number
        count += 1  # count every update
        print(n, '<== Update')
    else:
        print(n)

print(f'The maximum value found was: {max_int}.')
print(f'The maximum value was updated {count} times.')
print('```')



