def iniziale(s):
    nuova=""
    interpunzione=['.','?','!']
    parole=s.split(" ")
    inter=False
    nuova+=parole[0].lower().capitalize()+" "
    for p in parole[1:]:
        if p.lower()=="i" or p.lower()[0:2]=="i'":
            nuova+=p.lower().capitalize()+" "
        elif p.lower()[-1] in interpunzione:
            nuova += p.lower() + " "
            inter=True
        elif inter==True:
            nuova+=p.lower().capitalize()+" "
            inter=False
        else:
            nuova+=p.lower()+" "
    return nuova

if __name__=='__main__':
    s=input("Scrivi una stringa: ")
    nuova=iniziale(s)
    print(f"La stringa {s} corretta è:\n {nuova}")


