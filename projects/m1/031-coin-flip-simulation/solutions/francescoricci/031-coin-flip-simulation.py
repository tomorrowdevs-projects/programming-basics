# exercise 030 coin flip simulation by francesco Ricci
import random

# first letter of coin face.
coin_face = 'HT'
three_head = 'HHH'
three_tails = 'TTT'
print('\n')

for c in range(1, 10):
    count = 0
    res = ''
    isConsecutive = False
    while not isConsecutive:
        count += 1
        res += random.choice(coin_face)
        if three_tails in res or three_head in res: isConsecutive = True

    print(f"{' '.join(res)} ({count} flips)")