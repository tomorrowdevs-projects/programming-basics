import random

def create_card():
    s = 'BINGO'
    l = 1
    d = dict()
    for c in s:
        i = 0
        while i <= 4:
            n = random.randint(l, l+14)
            if c not in d:
                d[c] = d.get(n, [])
                d[c].append(n)
                i += 1
            if n not in d[c]:
                d[c].append(n)
                i += 1
        l += 15
    return d

