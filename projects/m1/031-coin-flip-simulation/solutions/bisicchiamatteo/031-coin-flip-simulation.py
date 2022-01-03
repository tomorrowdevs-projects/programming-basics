import random
total_f = 0

for flip_cont in range(11):
    i_tail = 0
    i_head = 0
    flip_row = 0
    head_tail = "TH"
    
    while (i_tail < 3 and i_head < 3):
        flip_now = random.choice(head_tail)
        if flip_now == "T":
            i_head += 1
            i_tail = 0
            flip_row += 1
            total_f += 1
            print(flip_now, end=" ")
        else:
            i_tail += 1
            i_head = 0
            flip_row += 1
            total_f += 1
            print(flip_now, end=" ")
    print(f"({flip_row} flips)")

average = total_f / flip_cont
print(f"On average, {average} flips were needed.")