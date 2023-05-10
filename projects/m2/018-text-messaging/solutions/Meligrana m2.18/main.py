if __name__ == '__main__':
    d = {"1": [".", ",", "?", "!", ":"], "2": ["A", "B", "C"], "3": ["D", "E", "F"], "4": ["G", "H", "I"],
         "5": ["J", "K", "L"], "6": ["M", "N", "O"], "7": ["P", "Q", "R", "S"], "8": ["T", "U", "V"],
         "9": ["W", "X", "Y", "Z"], "0": [" "]}
    messaggio=input("Messaggio ")
    s=""
    for c in messaggio.upper():
        for k,v in d.items():
            if c in v:
                s+=k*(v.index(c)+1)
    print(f"Per ottenere il messaggio {messaggio} occorre premere i seguenti tasti {s}")
