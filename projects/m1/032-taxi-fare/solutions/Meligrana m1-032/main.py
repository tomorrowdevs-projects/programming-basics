def tariffa(km):
    return 4.00+0.25*km*1000/140
if __name__ == '__main__':
    km = float(input("Chilometri percorsi: "))
    costo=tariffa(km)
    print(f"Il costo per {km} km percorsi è {costo:.2f} €")