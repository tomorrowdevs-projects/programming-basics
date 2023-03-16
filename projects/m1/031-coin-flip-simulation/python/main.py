import random

num_simulations = 10
flips_needed = []

for i in range(num_simulations):
    flips = []
    while True:
        flip = random.choice(["H", "T"])
        flips.append(flip)
        if len(flips) >= 3 and all(flip == flips[-1] for flip in flips[-3:]):
            flips_needed.append(len(flips))
            print(" ".join(flips), "({} flips)".format(len(flips)))
            break

average_flips_needed = sum(flips_needed) / num_simulations
min_flips_needed = min(flips_needed)
max_flips_needed = max(flips_needed)

print("On average, {:.1f} flips were needed.".format(average_flips_needed))
print("The minimum number of flips needed was {}.".format(min_flips_needed))
print("The maximum number of flips needed was {}.".format(max_flips_needed))
