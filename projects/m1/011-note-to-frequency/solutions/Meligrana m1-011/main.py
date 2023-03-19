if __name__=='__main__':
    quarta=["C","D","E","F","G","A","B"]
    frequenza=[261.63,293.66,329.63,349.23,392.00,440.00,493.88]
    nota=input("Nota ")
    lettera=nota[0]
    numero=int(nota[1])
    if lettera not in ["A","B","C","D","E","F","G"]:
        print("nota non corretta")
    elif numero<4 or numero>8:
        print("nota non corretta")
    else:
        q=quarta.index(lettera)
        frequenza=frequenza[q]*2**(numero-4)
    print(f"La frequenza della nota {nota} è {frequenza}")

