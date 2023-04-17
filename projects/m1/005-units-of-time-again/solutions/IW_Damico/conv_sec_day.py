secondi = int(input("numero di secondi da convertire "))
# divisine interi //
# resto %

print("n° giorni =", secondi//(3600*24))
resto_day =secondi%(3600*24)
print("n° ore",resto_day//3600)
resto_ore =resto_day%(3600)
print("n° minuti",resto_ore//60)
print("n° secondi ", resto_ore%(60))

print('{0:2d}:{1:2d}:{2:2d}:{3:2d}'.format(resto_oreday, n_ore, n_minuti , secondi))