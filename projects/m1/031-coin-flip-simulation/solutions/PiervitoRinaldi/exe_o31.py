import random
t_flips = 0
for flips in range(10):
    seq = ' '
    i_h = 0
    i_t = 0
    n_flip = 0
    
    while i_h < 3 and i_t < 3:
        flip_result = random.randint(0, 1)

        if flip_result == 0:
            i_h += 1
            i_t = 0
            flip_result = 'H'
            seq += flip_result
            n_flip += 1
            print(flip_result, end=' ')

        elif flip_result == 1:
            i_t += 1
            i_h = 0
            flip_result = 'T'
            seq += flip_result
            n_flip += 1
            print(flip_result, end= ' ')

    t_flips += n_flip
    print(f'({n_flip} flips)')
    
average = t_flips / 10
print(f'On average, {average} flips were needed.')