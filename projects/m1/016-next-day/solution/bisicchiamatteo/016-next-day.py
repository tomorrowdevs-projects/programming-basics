#inserimento anno  e controllo se bisestile
year=input("inseriscil'anno :")
if ((int(year)%400)==0):
    if(((int(year)%100)==0)):
        valyear=0
    else:
        valyear=1
elif((int(year)%4)==0):
       valyear=1
else:
       valyear=0
#inserimento mese e controllo se inserito un giusto valore
month =input("inserisci un mese in numero : ")
if (month =="1" or month== "3"or month== "5" or month=="7" or month=="8"or month=="10 "or month=="12"):
	valmonth=31
elif (month =="4" or month=="6"or month=="9"or month=="11"):
	valmonth=30
elif (month=="2"):
   if (valyear==1):
        valmonth=29
   else:
        valmonth=28
else :
	print("il valore inserito non e un mese valido")

#inserimento giorno e controllo se inserito giusto il valore confrontando con il valore del mese
day =input ("inserisci il giorno in numero :")
if(int(day)>int(valmonth)):
    print ("il valore inserito non è un giorno valido")

#operazione di aumento valori
day=int(day)+1
if (int(day) >int(valmonth)):
    day=day-valmonth
    month=int(month)+1
if (int(valmonth) >12):
    year=int(year)+1
    month=int(month)-12

#uscita valori
print ("il giorno sucessivo : " +str(day)+":"+str(month)+":"+str(year))