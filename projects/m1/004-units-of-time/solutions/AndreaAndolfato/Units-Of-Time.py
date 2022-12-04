
#Definizione delle singole unita' di tempo:

days = int(input("insert the number of days"))
hours = int(input("insert the number of hours"))
minutes = int(input("insert the number of minutes"))
seconds = int(input("insert the number of seconds"))

#Calcolo del tempo totale in secondi:

total_s = (60*60*24*days) + (60*60*hours) + (60*minutes) + seconds
print(total_s)