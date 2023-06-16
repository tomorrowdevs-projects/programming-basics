import os
if __name__=="__main__":
    nomeFile = input("> ")
    try:
        f = open(nomeFile)
        linee = []
        parole = []
        for l in f:
            linee.append(l)
        for i in linee:
            parole += i.lower().split()
        d = {"a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0,
             "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0}
        for k in d.keys():
            for p in parole:
                d[k] += p.count(k)
        print(d)
        f.close()
        f.flush()
    except:
        if not os.path.exists(nomeFile):
            print("Il file non esiste")

