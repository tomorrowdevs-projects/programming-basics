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

# you win if vertical
def vert(card):     
    k =[]
    while True :
        if k != [0, 0, 0, 0, 0] :
            number_estr = random.randint(1,76)
            print(number_estr)
            for n, k in card.items():
              if number_estr in k[0:]:
                  k.remove(number_estr)
                  k.append(0)
                  if k == [0, 0, 0, 0, 0]:
                      print('you win')
                      break

# you win if horizontal
def horiz(card):
    for k in card.keys():
       if card[k][0] == 0:
         print('you win')

# you win if diagonal
def diagonal(card):

 if card['b'] == 0:
    if card ['i'] == 0:
        if card ['n']== 0:
            if card ['g']  == 0:
                 if card ['o'] == 0:
                    print('you win')

#this generates a random card and tests all chances of winning       
import random
def gen(card):
 number_estr = random.randint(0,76)
 for n , k in card.items():
     if number_estr in k:
         k.update(number_estr)
 print (card)        
