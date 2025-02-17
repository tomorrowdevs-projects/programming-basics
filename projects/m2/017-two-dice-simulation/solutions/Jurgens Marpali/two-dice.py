import random

dice_sum = []
count_sum = []
for n in range(1, 1001):
    d1 = random.randint(1, 6)
    d2 = random.randint(1, 6)
    d3 = d1 + d2
    dice_sum.append(d3)

for num in dice_sum:
    n_times = str(num) + " " + str(dice_sum.count(num))
    if n_times not in count_sum:
        count_sum.append(n_times)
        
for i in count_sum:
    print(i)



