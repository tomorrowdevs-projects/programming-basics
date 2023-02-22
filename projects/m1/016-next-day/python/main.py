import datetime

year = int(input("Inserisci l'anno: "))
month = int(input("Inserisci il mese: "))
day = int(input("Inserisci il giorno: "))
date = datetime.date(year, month, day)

new_date = date + datetime.timedelta(days=1)

print(new_date)