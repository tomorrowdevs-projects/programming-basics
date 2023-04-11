'''Simula 10 sequenze di lanci di monete. Ciascuna sequenza dura fino a ottenere o tre teste o tre croci consecutive e determina il numero di lanci necessario per ottenerli. Infine calcola il numero medio di lanci'''
import random
if __name__ == '__main__':
    totale=0
    for i in range(0,10):
        lanci = 0
        teste = 0
        croci = 0
        s=""
        x = random.choice(["H", "T"])
        while (teste < 3 and croci < 3):
            if(x=="H"):
                croci=0
                teste+=1
            else:
                croci+=1
                teste=0
            s+=x+" "
            lanci += 1
            totale += 1
            x = random.choice(["H", "T"])
        print(f"{s} ( {lanci} lanci )")
    print(f"In media {totale/10} lanci")

