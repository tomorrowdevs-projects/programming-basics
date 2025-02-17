def reverseLookup(d, v):
    keys = []

    for key in d:
        if d[key] == v:
            keys.append(key)
    
    return keys

def main():

    user = {"Mine":"Mio", "Yours":"Tuo", "Theirs":"Loro", "Damn":"Dannazione"}

    print("La traduzione di mio è ", reverseLookup(user, "Mio"))


if __name__ == "__main__":
    main()