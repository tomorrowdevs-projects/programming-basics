cont_1 = int(input("Contenitori minori o uguali a 1 litro (deposito $=0,10) "))
cont_2 = int(input("Contenitori maggiori a 1 litro (deposito $=0,25) "))
tot =  float(cont_1*0.10 + cont_2*0.25)
print("Deposito totalizzato = " + str(round(tot, 2))+"$")