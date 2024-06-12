import random
bc = {}
# create a random bingo card
def bingo_card():
    z = []
    k = []
    h = []
    w = []
    r = []
    while len(r) != 5:
        b = random.randint(1,16)
        if b not in z:
         z.append(b)
        i = random.randint(16,31)
        if i not in k:
         k.append(i)
        n = random.randint(31,45)
        if n not in h:
         h.append(n)
        g = random.randint(45,61)
        if g not in w:
         w.append(g)
        o = random.randint(61,76)
        if o not in r:
         r.append(o)
    b = random.randint(1,16)
    bc.update({"b": z})
    i = random.randint(16,31)
    bc.update({"i": k})
    n = random.randint(31,45)
    bc.update({"n": h})
    g = random.randint(45,61)
    bc.update({"g": w})
    o = random.randint(61,76)
    bc.update({"o": r})
    print(bc)