
def toint(number, base):
    return int(number, base)

#onestamente questa funzione dopo diverse ore di tentativi per cercare di creare da solo una formula che funzionasse l'ho copiata da internet...e ancora non l'ho capita...sono troppo arrugginito con la matematica.
def numberToBase(n, b):
    if n == 0:
        return [0]
    digits = []
    while n:
        digits.append(str(n % b))
        n //= b
    return "".join(digits[::-1])

def conversion(number, base, goal_base):
    x = toint(number, base)
    if base != 10:      
        if goal_base == 10:
            return x
        elif goal_base == 16:
            return hex(x)
        else:
            return numberToBase(x, goal_base)
    elif goal_base == 16:
        return hex(x)
    else:
        return numberToBase(x, goal_base)
        
if __name__ == "__main__":
    number = input("Digit your number:\n")
    base = int((input("In wich base is it?\n")))
    goal_base = int(input("In what do you want to convert it?\n"))
    if base in range(2, 17) and goal_base in range(2, 17):
        print(conversion(number, base, goal_base))
    else:
        print("Your starting base or you goal base is not in range")
