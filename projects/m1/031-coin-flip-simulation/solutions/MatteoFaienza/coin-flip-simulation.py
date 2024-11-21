# Coin Flip Simulation
import random

count_flip = 0
heads_count = 0
tails_count = 0
txt_H_T = ''
total_flips = 0
average_count = 0

while count_flip < 10 :
    
    txt_H_T = ''
    total_flips = 0

    while heads_count < 3 and tails_count < 3 :

        total_flips += 1
        
        random_tails_head = random.randint(1,2)

        if random_tails_head == 1 :
            heads_count += 1
            tails_count = 0
            txt_H_T += 'H '
            average_count += 1

        else :
            tails_count += 1
            heads_count = 0
            txt_H_T += 'T '
            average_count += 1

    count_flip += 1
    heads_count = 0
    tails_count = 0
    print(txt_H_T,'   (',total_flips,'flips )')
     
average_flips = average_count / count_flip
print('On average',average_flips,'flips were needed.')  