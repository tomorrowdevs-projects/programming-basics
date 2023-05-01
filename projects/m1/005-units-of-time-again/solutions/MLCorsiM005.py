secondi = input("Inserisci durata totale in secondi: >>> ")
gg = int(secondi) // 86400
secondi = int(secondi) % 86400
hh = int(secondi) // 3600
secondi = int(secondi) % 3600
mm = int(secondi) // 60
secondi = int(secondi) % 60
#print(gg)
#print(hh)
#print(mm)
#print(secondi)
print('{0:2d}:{1:2d}:{2:2d}:{3:2d}'.format(gg, hh, mm , secondi))
