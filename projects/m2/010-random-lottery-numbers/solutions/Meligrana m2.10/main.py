import random

if __name__ == '__main__':
    insieme=set()
    a=random.randint(1,49)
    insieme.add(a)
    while len(insieme)<7:
        a = random.randint(1, 49)
        insieme.add(a)
    risultato=list(insieme)
    risultato.sort()
    print(risultato)