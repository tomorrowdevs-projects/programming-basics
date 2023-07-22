# Coin Flip Simulation
# This program simulates the flipping of a coin several times until 3 consecutive heads of 3 consecutive tails occur.
# The program performs the simulation 10 times and report the average number of flips needed.
import random
number_of_simulations = 0
total_flips = 0
heads_or_tails = ["H", "T"]
while number_of_simulations < 10:
    flip = random.choice(heads_or_tails)
    text_to_display = flip
    last_flip = flip
    number_of_flips = 1
    counting_of_consecutive = 1
    while counting_of_consecutive < 3:
        flip = random.choice(heads_or_tails)
        number_of_flips += 1
        if flip == last_flip: counting_of_consecutive += 1
        else: 
            last_flip = flip
            counting_of_consecutive = 1
        text_to_display = text_to_display + " " + flip
    print("{} ({} flips)".format(text_to_display, number_of_flips))
    number_of_simulations += 1
    total_flips = total_flips + number_of_flips    
average = total_flips / number_of_simulations
print("On average,", average, "flips were needed.")