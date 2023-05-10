if __name__ == '__main__':
    unità = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "height",
             9: "nine"}
    dieci_diciannove = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
                        16: "sixteen", 17: "seventeen", 18: "heighteen", 19: "nineteen"}
    venti_novanta = {20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "heighty",
                     90: "ninety"}
    numero = int(input("Numero da 0 a 999 "))
    s = ""
    if numero // 100 != 0:
        s += f"{numero // 100} hundred "
    b = numero % 100
    if b in unità.keys():
        s += f"{unità[b]}"
    elif b in dieci_diciannove.keys():
        s += f"{dieci_diciannove[b]}"
    else:
        s += f"{venti_novanta[b-(b%10)]} "
        c = b % 10
        if c!=0:
            s += f"{unità[c]}"

    print(f"{numero}\t{s}")
