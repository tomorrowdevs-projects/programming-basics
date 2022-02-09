import random
bc = {}
def bingo_card():
    z = []
    k = []
    h = []
    w = []
    r = []
    while len(r) != 5:
        b = random.randint(1,16)
        z.append(b)
        i = random.randint(16,31)
        k.append(i)
        n = random.randint(31,45)
        h.append(n)
        g = random.randint(45,61)
        w.append(g)
        o = random.randint(61,76)
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

def bingo_car_read():
      for k,v in bc.items():
            print(f"{k}",end=" ")
            print(f"{v}")
        
    
    
  
