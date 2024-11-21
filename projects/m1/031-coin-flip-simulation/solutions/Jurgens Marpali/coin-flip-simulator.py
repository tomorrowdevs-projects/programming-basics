import random

tot_f = 0
sim = 0
txt = ""

while True:
    if sim == 10:
        break
    sim += 1
    h = 0
    t = 0
    flip = 0
    txt = ""
    while h < 3 and t < 3:
        flip += 1
        flip_r = random.randint(0,1)
        if flip_r == 0:
            h += 1
            t = 0
            txt += "H "
        else:
            h = 0
            t += 1
            txt += "T "
    tot_f += flip
    print(txt + str(flip))

print("The Average flips need were ", str(tot_f / sim))

