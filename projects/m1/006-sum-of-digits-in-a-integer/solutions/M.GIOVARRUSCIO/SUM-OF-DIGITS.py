print("""\
Sviluppare un programma che legga un numero intero di quattro cifre 
dall'utente e visualizzi la somma delle sue cifre.
Ad esempio, se l'utente inserisce 3141, il programma
dovrebbe visualizzare 3+1+4+1=9.
""")
numero = input("Inserisci UN NUMERO A 4 CIFRE:")
somma=int(numero[0])+int(numero[1])+int(numero[2])+int(numero[3])
print('Il numero inserito è '+numero)
print('la somma delle cifre è :')
print(numero[0]+'+'+numero[1]+'+'+numero[2]+'+'+numero[3]+'='+str(somma))


