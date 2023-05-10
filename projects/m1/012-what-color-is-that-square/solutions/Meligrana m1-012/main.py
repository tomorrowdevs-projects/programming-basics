
if __name__=='__main__':
    casella=input("Inserisci una casella ")
    if casella[0] in ("a", "c", "e", "g"):
        if int(casella[1])%2!=0:
            print("Casella nera")
        else:
            print("Casella bianca")
    else:
        if int(casella[1])%2!=0:
            print("Casella bianca")
        else:
            print("Casella nera")