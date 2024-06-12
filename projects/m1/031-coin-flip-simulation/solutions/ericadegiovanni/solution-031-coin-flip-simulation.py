import random

count_flips = 0 # every flips during all the simulation
count_times = 0 # times the simulation is performed

# perform the simulation of a coin flip 10 times
print('```')
for coin in range(10):
    count_head = 0 
    count_tail = 0
    flip = 0 # coin flipped each simulation
    count_times += 1

    # flip a coin before you can have three consecutive flips 
    while count_head < 3 and count_tail < 3: 
        coin = random.randint(0,1)
        if coin == 0: 
            print('H', end=" ")
            count_head +=1
            flip += 1
            count_tail = 0
        else: 
            print('T', end=" ")
            count_tail +=1
            flip += 1
            count_head= 0  

    count_flips += flip
    print(f'({flip} flips)')

print()
print(f'On average, {count_flips / count_times} flips were needed.')
print('```')
