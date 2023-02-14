
#the user insert month and day
month = int(input("Inserisci il mese di nascita (1-12): "))
day = int(input("Inserisci il giorno di nascita (1-31): "))

#check conditions in month is == and day is higher or lower cert amount of day

if (month == 12 and day >= 22) or (month == 1 and day <= 19):
    zodiac = "Capricorno"
elif (month == 1 and day >= 20) or (month == 2 and day <= 18):
    zodiac = "Acquario"
elif (month == 2 and day >= 19) or (month == 3 and day <= 20):
    zodiac = "Pesci"
elif (month == 3 and day >= 21) or (month == 4 and day <= 19):
    zodiac = "Ariete"
elif (month == 4 and day >= 20) or (month == 5 and day <= 20):
    zodiac = "Toro"
elif (month == 5 and day >= 21) or (month == 6 and day <= 20):
    zodiac = "Gemelli"
elif (month == 6 and day >= 21) or (month == 7 and day <= 22):
    zodiac = "Cancro"
elif (month == 7 and day >= 23) or (month == 8 and day <= 22):
    zodiac = "Leone"
elif (month == 8 and day >= 23) or (month == 9 and day <= 22):
    zodiac = "Vergine"
elif (month == 9 and day >= 23) or (month == 10 and day <= 22):
    zodiac = "Bilancia"
elif (month == 10 and day >= 23) or (month == 11 and day <= 21):
    zodiac = "Scorpione"
elif (month == 11 and day >= 22) or (month == 12 and day <= 21):
    zodiac = "Sagittario"

#in this excercise i discovered the possibility to store the results of if/esle in variable and than print the variable
print("Il tuo segno zodiacale è:", zodiac)