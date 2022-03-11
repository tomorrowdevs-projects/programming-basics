tot_ticket=float(0.00)

while True:
    age=input("inserisci l'eta del visitatore :")
    if (age==""):
        break
    else:
        if (int(age)<3):
            tot_ticket =tot_ticket+0
            print(" il tiket ha un costo di 0$")
        elif(int(age)<12):
            tot_ticket =tot_ticket+14.00
            print(" il tiket ha un costo di 14.00$")
        elif(int(age)<64):
            tot_ticket =tot_ticket+23.00
            print(" il tiket ha un costo di 23.00$")
        elif(int(age)>=65):
            tot_ticket =tot_ticket+18.00
            print(" il tiket ha un costo di 18.00$")
        else:
            print("il valore inserito non � valdo")

print ("il costo totale � : " + str (tot_ticket)+"$")