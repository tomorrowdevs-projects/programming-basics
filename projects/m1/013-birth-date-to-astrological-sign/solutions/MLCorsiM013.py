print(" ___ Segno zodiacale ___ inserisci la tua data di nascita escluso l'anno")
giorno = input("Inserisci il giorno di nascita>>> ")
mese = input("Inserisci il mese di nasciata >>>")
# controllo se il giorno inserito è un numero decimale e se il mese inserito sono caratteri alfabetici
if giorno.isdecimal() == True and mese.isalpha() == True:
    mese = mese.lower()
    giorno = int(giorno)
# se mi restituisce falso controllo l'errore di immissione e faccio riavviare il programma dopo aver visualizzato il messaggio
elif giorno.isdecimal() == False:
    print("Errore nell'inseirmento del giorno >>> Riavvia il programma")    
else:
    print("Devi inserire il nome del mese e non il numero >>> Riavvia il programma")
if (mese == "dicembre" and giorno >= 22) or (mese == "gennaio" and giorno <= 19):
    print("Capricorno")
elif (mese == "gennaio" and giorno >= 20) or (mese == "febbraio" and giorno <= 18):
    print("Acquario")
elif (mese == "febbraio" and giorno >= 19) or (mese == "marzo" and giorno <= 20):
    print("Pesci")
elif (mese == "marzo" and giorno >= 21) or (mese == "aprile" and giorno <= 19):
    print("Ariete")    
elif (mese == "aprile" and giorno >= 20) or (mese == "maggio" and giorno <= 20):
    print("Toro")
elif (mese == "maggio" and giorno >= 21) or (mese == "giugno" and giorno <= 20):
    print("Gemelli")
elif (mese == "giugno" and giorno >= 21) or (mese == "luglio" and giorno <= 22):
    print("Cancro")
elif (mese == "luglio" and giorno >= 23) or (mese == "agosto" and giorno <= 22):
    print("Leone")
elif (mese == "agosto" and giorno >= 23) or (mese == "settembre" and giorno <= 22):
    print("Bilancia")
elif (mese == "ottobre" and giorno >= 23) or (mese == "novembre" and giorno <= 21):
    print("Scorpione")
elif (mese == "novembre" and giorno >= 22) or (mese == "dicembre" and giorno <= 21):
    print("Sagittario")
