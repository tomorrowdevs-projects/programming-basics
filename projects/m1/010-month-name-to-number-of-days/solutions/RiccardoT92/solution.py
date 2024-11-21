#The length of a month varies from 28 to 31 days. 
#In this exercise you will create a program that reads the name of a month from the user as a string. 
#Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.


#inizializzo tutte le variabili 
name_month=input("digita il nome del mese: ")
months_31_days="gennaio,marzo,maggio,luglio,agosto,ottobre,dicembre"
months_30_days="aprile,giugno,settembre,novembre"
month_28_29_days="febbraio"
#faccio i controlli per vedere se il nome del mese è all'interno delle variabili create
if name_month in months_30_days:
    print("questo mese ha 30 giorni")
if name_month in months_31_days:
    print("questo mese ha 31 giorni")
else:
    print("questo mese ha o 28 o 29 giorni")