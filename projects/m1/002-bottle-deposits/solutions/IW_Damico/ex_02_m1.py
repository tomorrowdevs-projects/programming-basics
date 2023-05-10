"""In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.
In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
and drink containers holding more than one liter have a $0.25 deposit.
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be received for returning those containers.
Format the output so that it includes a dollar sign and two digits to the right of the decimal point.
"""
import decimal
from builtins import input, bytes
from functools import total_ordering


def calcolo_importo(tipo, numero):

    if tipo != 1:
        bonus = numero*0.1
    else:
        bonus = numero*0.25
    return bonus


if __name__ == "__main__":
    cont_max1 = int(input("numero di contenitori maggiori di 1 litro "))
    importo_1 = float(calcolo_importo(1, cont_max1))
    cont_min = int(input("numero di contenitori minori o uguali a 1 litro "))
    importo_2 = float(calcolo_importo(0, cont_min))
    totale = importo_1 + importo_2
    #print(totale, "$")
    print(round(totale, 3), "$")
