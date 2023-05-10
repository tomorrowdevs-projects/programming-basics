secondi=int(input("Inserisci i secondi-> "))
giorni= secondi//86400
secondi=secondi%86400
print(secondi)
ore=secondi//3600
secondi=secondi%3600
print(secondi)
minuti=secondi//60
secondi=secondi%60
print(secondi)
print(f"Il tempo inserito in secondi equivale a: ")
print("GIORNI \t",giorni)
print("ORE \t",ore)
print("MINUTI \t",minuti)
print("SECONDI\t",secondi)
