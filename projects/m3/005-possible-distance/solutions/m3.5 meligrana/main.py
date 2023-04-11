
def funzione(cifra,monete,rimanente,non_usate,l,d):
    i=0
    if l==[]:
        return
    elif l[i]*monete>cifra:
        monete-=1
        non_usate+=1
        funzione(cifra, monete, rimanente, non_usate, l, d)
        return
    elif l[i]*monete==cifra and rimanente==0 and non_usate==0:
        d[l[i]]=monete
        return
    elif l[i]*monete==cifra and  non_usate!=0:
        monete -= 1
        non_usate += 1
        d[l[i]]=monete
        rimanente = cifra - l[i] * monete
        i += 1
        funzione(rimanente, non_usate, 0, 0, l[i:], d)
        return
    elif l[i]*monete<cifra:
        rimanente=cifra-l[i]*monete
        d[l[i]]=monete
        i+=1
        funzione(rimanente, non_usate, 0, 0, l[i:], d)
        return

if __name__ == '__main__':
    cifra = float(input("Cifra "))
    numero_monete = int(input("Numero di monete "))
    centesimi = 100 * cifra
    lista = [25, 10, 5, 1]
    d = {25: 0, 10: 0, 5: 0, 1: 0}
    non_usate = 0
    rimanente=0
    funzione(centesimi, numero_monete, rimanente, non_usate, lista,d)
    valori=0
    totale=0
    for k,v in d.items():
        totale+=k*v
        valori+=v
    if totale==centesimi and valori==numero_monete:
        print(d)
    else:
        print("No")

