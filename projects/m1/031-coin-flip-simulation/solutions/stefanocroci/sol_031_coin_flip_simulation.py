import random

simulations = 0
tot_flips = 0
text = ''
while True:
    # Breake the loop after ten simulations
    if simulations == 10:
        break
    simulations += 1
    # Each simulations reset the counts oh H, T and FLIPS to zero and clear the text
    flips = 0
    count_h = 0
    count_t = 0
    text = ''
    while count_h < 3 and count_t < 3:
        # Each loop increase flips of one and simulate the flip of the coin.
        # if heads increase heads count of one and reset tails count to zero, the opposite if 
        # comes out tails.
        # The loop goes on until one of the counts reach 3
        flips += 1
        random_flip = random.randint(0, 1)
        if random_flip == 0:
            count_h += 1
            count_t = 0
            text += 'H '
        else:
            count_h = 0
            count_t += 1
            text += 'T '

    tot_flips += flips
    print(text + str(flips))

print('On avarage ' + str(tot_flips / simulations) + ' are needed')

    

