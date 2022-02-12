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
# randomize the order of its elements by calling the shuffle function in the random module.
bingo_card()
def shuffle(card):
    random.shuffle(card)
    print(card)
#  calls out of the list and cross out numbers on the card until the card contains a winning line.

def calls_out_of_the_list(card):
    cont = 0
    k =[]
    n_games = []
    games = 0
    while games!= 1000:                       # the number is too large, it is better to prefer a number like 3 for the test
        if k != [0, 0, 0, 0, 0] :
            cont += 1
            number_estr = random.randint(1,76)
            print(number_estr)
            for n, k in card.items():
              if number_estr in k[0:]:
                  k.remove(number_estr)
                  k.append(0)
                  if k == [0, 0, 0, 0, 0]:
                      k.clear()
                      games += 1
                      print('you win')
                      n_games.append(cont)
                      n_games.sort()
                      
    print(f'the minimum call is :{n_games[0]} maximum call is :{n_games[-1]} number of calls that must be made before the card wins :{sum(n_games) / len(n_games)}')
bingo_card()
calls_out_of_the_list(bc)    
                      
