'''Calcola il costo totale di ingresso allo zoo di un gruppo di visitatori'''
if __name__ == '__main__':
    somma = 0.0
    eta = input("età visitatore ")
    while( eta != "" ):
        if int(eta) <= 2:
            somma += 0
        elif 3 <= int(eta) <= 12:
            somma += 14
        elif int(eta) >= 65:
            somma += 18
        else:
            somma += 23
        eta = input("età visitatore ")
    print(f"totale={somma:.2f} $")