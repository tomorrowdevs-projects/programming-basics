"""Write a program that displays the key presses needed for a message entered by the user. Construct a dictionary that maps from each letter or symbol to the key presses needed to generate it. Then use the dictionary to create and display the presses needed for the user’s message. For example, if the user enters Hello, World! then your program should output 4433555555666110966677755531111"""

phone = {
    '1': ['.', ',', '?', '!', ':'], 
    '2': ['A', 'B', 'C'], 
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y' ,'Z'],
    '0': [' ']
    }

mex = "HELLO, WORLD!" #input("Insert a message: ").upper()
output = ""
for c in mex:
    for k in phone.keys():
        if c in phone[k]:           #se il carattere c di mex è nella lista dei valori della chiave k
            n = phone[k].index(c)   #trovi la posizione indice di c nella lista dei valori della chiave k
            output += k * (1 + n)   #aggiungi la chiave k all'output, per n volte + 1 (perchè l'indice parte da 0)
print(output)