def recursive_sum():
    number = input("Inserisci un numero (o una stringa vuota per terminare): ")
    if number == "":
        return 0
    else:
        return float(number) + recursive_sum()

total_sum = recursive_sum()
print("La somma totale è:", total_sum)