import random
total_flips = 0

for flip_times in range(11):
    i_t = 0
    i_h = 0
    flip_row = 0
    head_tail = "TH"
    
    while i_t < 3 and i_h < 3:
        flip = random.choice(head_tail)
        if flip == "T":
            i_h += 1
            i_t = 0
            flip_row += 1
            total_flips += 1
            print(flip, end=" ")
        else:
            i_t += 1
            i_h = 0
            flip_row += 1
            total_flips += 1
            print(flip, end=" ")
    print(f"({flip_row} flips)")

average = total_flips / flip_times
print(f"\nOn average, {total_flips} flips were needed.")