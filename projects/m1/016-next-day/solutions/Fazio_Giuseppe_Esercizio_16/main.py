"""
A magic date is a date where the day multiplied by the month is equal
to the two digit year.
For example, June 10, 1960 is a magic date because June is the sixth month,
and 6 times 10 is 60, which is equal to the two digit year.
Write a function that determines whether or not a date is a magic date.
Use your function to create a main program that finds and displays
all of the magic dates in the 20th century.
"""
anno=0
mese=0
giorno=0

# funzione per il calcolo numero magico
def Magic_Num(giorno, mese, anno):
   anno=anno-1900
   if (giorno * mese == anno):
    return True
   else:
    return False


# funzione per il calcolo dell'anno bisestile
def Bisesto(anno):
    if (anno % 400 == 0):
        return True
    if (anno % 100 == 0):
        return False
    if (anno % 4 == 0):
        return True

# PROGRAMMA PRINCIPALE
def main():

    for anno in range(1900,2000,1):
           for mese in range(1, 13, 1):
               if mese in [1,3,5,7,8,10,12]:
                for giorno in range(1, 32, 1):
                        if Magic_Num(giorno, mese, anno):
                             print(f"{giorno:0>2}-{mese:0>2}-{anno}")

               elif mese in [4, 6, 9, 11]:
                for giorno in range(1, 31, 1):
                        if Magic_Num(giorno, mese, anno):
                             print(f"{giorno:0>2}-{mese:0>2}-{anno}")

# mese di febbraio - verifica anno bisestile
               elif mese == 2:
                if Bisesto(anno):
                    for giorno in range(1, 30, 1):
                        if Magic_Num(giorno, mese, anno):
                            print(f"{giorno:0>2}-{mese:0>2}-{anno}")
                else:
                    for giorno in range(1, 29, 1):
                        if Magic_Num(giorno, mese, anno):
                            print(f"{giorno:0>2}-{mese:0>2}-{anno}")

main()
