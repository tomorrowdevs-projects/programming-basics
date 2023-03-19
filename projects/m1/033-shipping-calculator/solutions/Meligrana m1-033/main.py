def CostoArticoli(n=0):
    if n==1:
        return 10.99
    else:
        return 10.99+2.99*(n-1)

if __name__ == '__main__':
    n = int(input("Numero di articoli acquistati "))
    print(f"Costo articoli={CostoArticoli(n):.2f} $")