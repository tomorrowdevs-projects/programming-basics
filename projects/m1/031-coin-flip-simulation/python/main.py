import random

def head_or_tails(coin):
    if coin == 0:
        return 'H'
    else:
        return 'T'

def number_of_a_flipping_coins():
    current_flip = head_or_tails(random.randint(0,1))
    print(current_flip,end=" ")
    previous_flip = current_flip
    total_flips = 1
    same_flips_counter = 0
    while same_flips_counter < 2:
        current_flip = head_or_tails(random.randint(0,1))
        print(current_flip,end=" ")
        total_flips += 1
        if current_flip == previous_flip:
            same_flips_counter += 1
        else:
            same_flips_counter = 0
        previous_flip = current_flip
    return total_flips

total_flips = 0

for index in range(10):
    flip = number_of_a_flipping_coins()
    print("({} flips)".format(flip))
    total_flips += flip

average_flips = total_flips / 10
print("On average, {} flips were needed".format(average_flips))



