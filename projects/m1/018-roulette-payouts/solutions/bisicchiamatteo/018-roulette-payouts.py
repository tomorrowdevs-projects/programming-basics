import random


ROULET=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16", "18", "19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","00"]
RED=["1","3","5" , "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34" , "36"]
bet=[]

#inizio partita


valbet=input ("inserisci il numero della  tua puntata " + str(len(bet)+1) +" oppure premi invio per finire ")
bet=bet +[valbet]
print (" i valori delle puntate da te scelti sono :")
for valbet in bet:
    print(" "+valbet)

draw_out=int(random.randint(1,38))
print("il numero pescato e "+ str(ROULET[int(draw_out)]))
drawtmp= str(ROULET[int(draw_out)])
for valbet in bet:
    if (drawtmp==valbet):
        print(" paga "+ valbet)
        
    else:
       print ("la puntata "+valbet+ " non è vincente")
if ((valbet=="0")or(valbet=="00")):
            print(" paga "+ valbet)
if ((int(valbet)%2)== 0): 
            print(" paga "+ valbet+" e pari")
else: 
     print(" paga "+ valbet+" e dispari")
if(int(valbet)<=18):
    print("paga "+ valbet + " valore tra 0 e 18")
else :
    print("paga "+ valbet + " valore tra 19 e 36")
if (set(valbet)==set(RED)) :
    print("paga "+ valbet + " rosso")
else:
    print("paga "+ valbet + " rosso")    
