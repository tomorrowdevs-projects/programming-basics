from random import randint

coin = {1: "H", 2: "T"}
times = 10
total_flips = 0

for i in range(times):
    i = 0
    n = 0
    flip = 0
    while i < 3:
        flip += 1
        generator = randint(1, 2)
        if generator != n:
            i = 1
        else:
            i += 1
        n = generator
        print(coin[generator], end=" ")
    total_flips += flip
    print(f"({flip} flips)\n")

average = total_flips/times
print(f"On average, {average} flips were needed.")


















