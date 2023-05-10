import random
def createDeck():
    semi=["s","c","h","d"]
    valori=["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    carte=[]
    for s in semi:
        for v in valori:
            carte.append(v+s)
    return carte
def shuffle(carte):
    mazzo_non_ordinato = []
    while (len(mazzo_non_ordinato) < 52):
        for i in range(0,len(mazzo_ordinato)):
            a = random.randint(0, 51)
            c = (a + i) % 52
            carta = mazzo_ordinato[c]
            if carta not in mazzo_non_ordinato:
                mazzo_non_ordinato.append(carta)
    return mazzo_non_ordinato

if __name__ == '__main__':
    mazzo_ordinato=createDeck()
    mazzo_non_ordinato=shuffle(mazzo_ordinato)
    print(mazzo_ordinato)
    print(mazzo_non_ordinato)

