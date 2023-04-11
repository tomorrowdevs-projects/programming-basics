import math

if __name__ == '__main__':
    lista=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]
    anno=int(input("Anno: "))
    giorno = (anno+ math.floor((anno-1)/4)-math.floor((anno-1)/100)+math.floor((anno-1)/400))%7
    print(f"Il primo gennaio del {anno} è {lista[giorno]}")