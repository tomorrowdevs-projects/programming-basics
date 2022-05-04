userChange = int(input("number of cents"))  # parto con 370
def dueChange(userChange):   # funzione define 
    toonies = userChange//200   #resto in toonies for user(1)
    tooniesRest = userChange % 200    #residuo resto quindi userchange - toonies(170)
    print(str(toonies) + "toonies")   #(lo stringo per scriverci toonies affianco)--> quanti toonies abbiamo? 




