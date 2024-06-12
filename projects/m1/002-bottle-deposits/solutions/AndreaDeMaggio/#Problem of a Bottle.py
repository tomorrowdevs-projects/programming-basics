2#Problem of a Bottle 

#In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, 
# drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit.
#Write a program that reads the number of containers of each size from the user.
#Your program should continue by computing and displaying the refund that will be received for returning those containers. 
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.


prezzo1=0.25
prezzo2=0.10

print("inserisci il numero di bottiglie che hai :)")
#faccio mettere le quantite delle bottiglie da posare:
bottiglie0lt=int(input("quante bottiglie hai inferiori a un litro?"))
Bottiglie1lt=int(input("quante bottiglie hai superiori ad un litro?"))
#calcolo il resto delle bottiglie
valtot=f"{bottiglie0lt*prezzo2}"
print("hai guadagnato"+valtot)
valtot2=f"{Bottiglie1lt*prezzo1}"
print("hai guadagnato"+valtot2)

















    

    




























