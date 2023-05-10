print ("Calco del Total deposit")
depMinor = 0.10
depMaior = 0.25

Minor= int(input ("inserisci il numero di bottiglie <= 1 liter: "))
Maior= int(input ("inserisci il numero di bottiglie  > 1 liter: "))
print (" deposito bottiglie piccole = $", Minor*depMinor )
print (" deposito bottiglie grandi = $",  Maior*depMaior )
print (" deposito bottiglie totale = $",  Minor*depMinor+Maior*depMaior )
