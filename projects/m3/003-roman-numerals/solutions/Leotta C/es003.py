def roman_numbers(lista, somma=0):
    d = {
        "M": 1000, "D": 500,
        "C": 100, "L": 50,
        "X": 10, "V": 5, "I": 1
    }

    if len(lista) <= 1:
        result = somma + d[lista[0]]
        return result

    value = d[lista[0]]
    value_succ = d[lista[1]]
    if value >= value_succ:
        somma += value
        return roman_numbers(lista[1:], somma)
    else:
        value_succ -= value
        somma += value_succ
        if len(lista) > 2:
            return roman_numbers(lista[2:], somma)
        else:
            return somma


roman_input = input("Enter a Roman Numeral: ")
lista = list(roman_input)
print(roman_numbers(lista))