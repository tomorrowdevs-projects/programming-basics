"""
Write a program that reads a date from the user and computes its immediate successor.
For example, if the user enters values that represent 2019-11-18
then your program should display a message indicating that
the day immediately after 2019-11-18 is 2019-11-19.
If the user enters values that represent 2019-11-30
then the program should indicate that the next day is 2019-12-01.
If the user enters values that represent 2019-12-31
then the program should indicate that the next day is 2020-01-01.
The date will be entered in numeric form with three separate input statements;
one for the year, one for the month, and one for the day.
Ensure that your program works correctly for leap years.
"""
#Inserimento anno, mese e giorno
year = int(input("Inserire anno:"))
mese = int(input("Inserire mese:"))
day = int(input("Inserire giorno:"))
#Calcola giorno successivo day1
day1=day+1
#Calcolo del giorno successivo tenuto conto se:
#caso 1: è uno dei mesi da 31 giorni
if (mese == 1) or (mese == 3) or (mese == 5) or (mese == 7) or (mese == 8) or (mese == 10) or (mese == 12):
    #se day1>31 allora occorre calcolare il giorno successivo
    #verificando se il mese è dicembre allora devo aumentare
    #l'anno e settare al mese successivo e ad 1 il giorno
    if (day1>31):
        if (mese==12):
            day1 = 1
            month1  =(mese+1)%12
            year+=1
        # per gli altri mesi da 31 gg si incrementa semplicemente il mese
        # e si setta a 1 il giorno
        else:
            day1=1
            month1=(mese+1)%12
    #se day1<31 allora il mese rimane lo stesso
    else:
        month1=mese
#nel caso di febbraio occorre verificare le due situazioni:
# anno bisestile => febbraio ha 29 giorni
# anno non bisestile => febbraio ha 28 giorni
elif (mese == 2):
    #anno bisestile
    if 400 != 0 and (4 != 0 or 100 == 0):
        #day>29
        if (day1 > 29):
            day1 = 1
            month1 = (mese + 1) % 12
        #day1<29
        else:
            month1 = mese
    #anno non bisestile
    else:
        #day1>28
        if (day1 > 28):
            day1 = 1
            month1 = (mese + 1) % 12
        #day1<28
        else:
            month1 = mese

#mesi con 30 giorni
else:
    #day1>30
    if (day1>30):
        day1 = 1
        month1 = (mese + 1) % 12
    #day1<30
    else:
        month1=mese
print("IL SUCCESSORE SARA'")
print("GIORNO:",day1)
print("MESE:",month1)
print("ANNO:",year)