nBott1=int(input("Inserisci il numero di bottiglie da 1l o meno: "))
nBott2=int(input("Inserisci il numero di bottiglie da più di 1l: "))
rimb1=nBott1*0.1
rimb2=nBott2*0.25
rimbt=rimb1+rimb2
print("Per la tipologia1 di contenitori riceverai $ %.2f"% rimb1)
print("Per la tipologia2 di contenitori riceverai $ %.2f"% rimb2)
print("In totale avrai un rimborso pari a $ %.2f"%rimbt)