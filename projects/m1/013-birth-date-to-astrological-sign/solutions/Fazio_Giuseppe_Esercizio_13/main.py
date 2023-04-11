
mese= int (input("inserisci il numero del mese" ))
giorno = int (input("inserisci il giorno di nascita"))
print ("mese=", mese , "giorno=",giorno)

if (mese ==1  and giorno<=19) or (mese ==12  and giorno>=22):
    print ("segno zodiacale =  Capricorno")
elif (mese ==2  and giorno<=18) or (mese ==1  and giorno>=20):
    print ("segno zodiacale =  Acquario")
elif(mese ==3  and giorno<=20) or (mese ==2  and giorno>=19):
    print ("segno zodiacale =  Pesci")
elif(mese ==4  and giorno<=19) or (mese ==3  and giorno>=21):
    print ("segno zodiacale =  Ariete")
elif(mese ==5 and giorno <= 20) or (mese ==4  and giorno>=20):
        print("segno zodiacale = Toro")
elif(mese ==6  and giorno<=20) or (mese ==5 and giorno<=21):
    print ("segno zodiacale =  Gemelli")
elif(mese ==7 and giorno <= 22) or (mese ==6  and giorno>=21):
        print("segno zodiacale =  Cancro")
elif(mese ==8  and giorno<=22) or (mese ==7  and giorno>=23):
    print ("segno zodiacale =  Leone")
elif(mese ==9  and giorno<=19) or (mese ==8 and giorno>=23):
    print ("segno zodiacale =  Vergine")
elif(mese ==10  and giorno<=22) or (mese ==9  and giorno>=23):
    print ("segno zodiacale = Bilancia")
elif(mese ==11  and giorno<=21) or (mese ==10 and giorno>=23):
    print ("segno zodiacale =  Scorpione")
elif(mese ==12  and giorno<=21) or (mese ==11  and giorno>=22):
    print ("segno zodiacale =  Sagittario")
    

