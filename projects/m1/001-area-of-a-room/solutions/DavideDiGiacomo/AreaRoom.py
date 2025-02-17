print ("Ciao, devi calcolare l'area della tua stanza ma hai delle difficoltà??") 
print  ('Nessun problema! Ci sono io! Mi presento sono RoomAreaCalculator!')

#inserimento primo lato
print ('Inserisci la misura (in metri) del primo lato della stanza:')
side1 = float(input())
print ("Il primo lato della stanza è di " + (str(side1) + " metri"))
print ('Perfetto!')

#inserimento secondo lato
print ('Inserisci ora la misura (in metri) del secondo lato della stanza:')
side2 = float(input())
print ("Il secondo lato della stanza è di " + (str(side2) + " metri"))
print ("Perfetto!")

#calcolo area
print ("L'area della tua stanza è di:")
areaRoom = (side1 * side2)
print (str(areaRoom) + " metri quadrati!")
