# Calcolo del resto in centesimi dato un prezzo da pagare

prezzo= int(input ("inserisci il prezzo della bevanda: "))
pagato= int(input ("inserisci il pagato: "))
resto= int((pagato-prezzo))
print ("Da restituire", resto)
c = resto % 100
resto = int(resto/100)
print ("pezzi da 1 Euro da restituire=", resto)
print ("Resto= cents" , c)
cinquanta=int (c/50)
print ("pezzi da 50 centesimi=" , cinquanta)
c= c%50
print ("resto da 50 centesimi=" ,c)

venti=int(c/20)
print ("pezzi da 20 centesimi=" , venti)
c=c%20
print ("resto da 20 centesimi=" ,c)
print ("-----------------")
dieci=int (c/10)
print ("pezzi da 10 centesimi=" ,dieci)
c=c%10
cinque=int (c/5)
print ("pezzi da 5 centesimi=" ,cinque)
c=c%5
due=int(c/2)
print ("pezzi da 2 centesimi= ",due)
c=c%2
print ("pezzi da 1 centesimi=" ,c)
