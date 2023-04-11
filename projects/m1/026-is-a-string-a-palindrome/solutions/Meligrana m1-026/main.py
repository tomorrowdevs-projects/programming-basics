if __name__=='__main__':
    s=input("Stringa ")
    a=True
    b=len(s)//2
    for i in range(0,b):
        if s[i]!=s[len(s)-i-1]:
            a=False
    if a:
        print(f"La stringa {s} è palindroma")
    else:
        print(f"La stringa {s} non è palindroma")
