if __name__=='__main__':
    prezzi=[4.95, 9.95, 14.95, 19.95, 24.95]
    print(f"  prezzo   | sconto    |  prezzo scontato   ")
    for p in prezzi:
        print(f'{p:10.2f} | {0.6*p:10.2f}|{p-0.6*p:10.2f}')