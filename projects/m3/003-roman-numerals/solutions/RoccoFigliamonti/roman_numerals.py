"""
Create a recursive function that converts a Roman numeral to an integer. 

Your function should process one or two characters at the beginning of the string, and then call itself recursively on all of the unprocessed characters. Use an empty string, which has the value 0, for the base case. """




def conver_roman_int(num):
    roman_to_int = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
    if len(num) == 1:
        return roman_to_int[num] #base case
    else:
        if roman_to_int[num[-2]]>=roman_to_int[num[-1]]:
            return roman_to_int[num[-1]] + conver_roman_int(num[:-1])
        else:
            return roman_to_int[num[-1]] - roman_to_int[num[-2]] + conver_roman_int(num[:-2])
        
        #prendi ultimi 2 caratteri
        #se il minore sta a sinistra sottraili e ritorna il result, se il minore sta a destra lo ritorni direttamente
        #droppa i caratteri già ritornati e restituisci il resto della stringa come ricorsione
        #se la stringa è 1 carattere --> caso base, ritorna il valore


print(conver_roman_int("XVI"))
print(conver_roman_int("XIV"))
print(conver_roman_int("MCXLIV"))
print(conver_roman_int("MCXXXIV"))

