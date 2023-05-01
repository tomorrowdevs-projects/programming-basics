print("""\
In questo esercizio creerai un programma che legge una lettera dell'alfabeto dall'utente.
Se l'utente inserisce a, e, i, o o u, il programma dovrebbe visualizzare 
un messaggio che indica che la lettera inserita è una vocale.
Se l'utente inserisce y, il programma dovrebbe visualizzare 
un messaggio che indica che a volte y è una vocale e talvolta y è una consonante.
Altrimenti il ​​tuo programma dovrebbe visualizzare un messaggio che indica 
che la lettera è una consonante.
""")
char = input("Inserisce una lettera:")
if char == 'a' or char == 'e' or char == 'i' or char == 'o' or char == 'u':
    print("E' stata inserita una vocale")
elif char == 'y':
    print("E' stata inserita y che è una vocale e talvolta una consonante")
else:
    print("E' stata inserita una consonante")

