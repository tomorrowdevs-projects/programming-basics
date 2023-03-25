import random
'''Determina il massimo di una sequenza di numeri random tra 1 e 100 e il numero di volte in cui il massimo è stato aggiornato'''
if __name__ == '__main__':
    n = random.randint(1,100)
    max = n
    totale=1
    print(f"{n}\t<- Update")
    for i in range(1,100):
        n = random.randint(1, 100)
        if n>max :
            max=n
            totale+=1
            print(f"{n}\t<- Update")
        else:
            print(f"{n}")
    print(f"Il massimo valore trovato è {max}")
    print(f"Il massimo è stato aggiornato {totale} volte")




