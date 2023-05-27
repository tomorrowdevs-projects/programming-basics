
#acquisisce da input una sequenza di numeri ineteri terminata da 0 e la stampa in ordine crescente

num = (int(input("Inserisci numeri interi (0 per terminare)")))
v=[]
while num!=0:
    v.append(num)
    num = (int(input("Inserisci numeri interi (0 per terminare)")))
v.sort()
print(v)

