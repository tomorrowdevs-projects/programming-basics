if __name__ == '__main__':
    d = {1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"], 2: ["D", "G"], 3: ["B", "C", "M", "P"],
         4: ["F", "H", "V", "W", "Y"], 5: ["K"], 8: ["J", "X"], 10: ["Q", "Z"]}
    parola = input("Parola ")
    somma = 0
    for p in parola.upper():
        for k, v in d.items():
            if p in v:
                somma += k

    print(f"Il punteggio della parola {parola} è {somma}")
