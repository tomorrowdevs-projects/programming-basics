
#Definizione delle singole unita' di tempo:

d = int(input("insert the number of days"))
h = int(input("insert the number of hours"))
m = int(input("insert the number of minutes"))
s = int(input("insert the number of seconds"))

#Calcolo del tempo totale in secondi:

total_seconds = (60*60*24*d) + (60*60*h) + (60*m) + s
print(total_seconds)