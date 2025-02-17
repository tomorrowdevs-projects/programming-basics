"""Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.
The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. 
Non-letter characters are not modified by the cipher.
Write a program that implements a Caesar cipher. 
Allow the user to supply the message and the shift amount, and then display the shifted message. 
Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages.
"""
from secrets import choice
from string import ascii_lowercase, ascii_uppercase
#opzione coding or decoding
#lista lettere maisc e minusc
#ciclo fino alla terzultima e poi casi particolari
#ciclo a ritroso fino alle prime 3 e poi casi particolari

choice_of_code = input("Please choice between 'coding' or 'decoding': ").lower()
phrase = tuple(input("Please write the phrase: "))

lower_alphabet = tuple(ascii_lowercase)
upper_alphabet = tuple(ascii_uppercase)

new_phrase = []
if choice_of_code == "coding":
    for char in phrase: #cicla su tutti i caratteri della frase
        if char in lower_alphabet[:-3]: #se il carattere non è x,y,z
            new_phrase.append(lower_alphabet[lower_alphabet.index(char)+3]) #prendi il carattere in lower_aph che ha come indice lo stesso di char+3
        elif char in lower_alphabet[-3:]: #se il carattere è x,y,z
            if char == "x":
                new_phrase.append("a")
            elif char == "y":
                new_phrase.append("b")
            else:
                new_phrase.append("c")
        elif char in upper_alphabet[:-3]: #uguale per le maiuscole
             new_phrase.append(upper_alphabet[upper_alphabet.index(char)+3]) 
        elif char in upper_alphabet[-3:]: #se il carattere è X;Y;Z
            if char == "X":
                new_phrase.append("A")
            elif char == "Y":
                new_phrase.append("B")
            else:
                new_phrase.append("C")
        else:
            new_phrase.append(char) #per caratteri che non siano lettere

elif choice_of_code == "decoding":
    for char in phrase:
        if char in lower_alphabet[3:]: #se il carattere non è a,b,c
            new_phrase.append(lower_alphabet[lower_alphabet.index(char)-3]) #uguale a prima ma ora si scala l'indice indietro di 3 posizioni
        elif char in lower_alphabet[:3]: #casi particolari a,b,c
            if char == "a":
                new_phrase.append("x")
            elif char == "b":
                new_phrase.append("y")
            else:
                new_phrase.append("z")
        elif char in upper_alphabet[3:]:
            new_phrase.append(upper_alphabet[upper_alphabet.index(char)-3]) #uguale ma con maiuscole
        elif char in upper_alphabet[:3]: #casi particolari A,B,C
            if char == "A":
                new_phrase.append("X")
            elif char == "B":
                new_phrase.append("Y")
            else:
                new_phrase.append("Z")
        else:
            new_phrase.append(char) #per caratteri che non siano lettere
else:
    print("You have to insert 'coding' or 'decoding'!!!")

for el in new_phrase:
    print(el,end="")


#abcdefghijklmnopqrstuvwxyz123456789
#ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789