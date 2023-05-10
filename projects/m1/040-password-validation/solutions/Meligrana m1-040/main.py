'''Valida una password'''
def verifica_password(s):
    i = 0
    minuscola = False
    maiuscola = False
    cifra = False
    if len(s) < 8:
        return False
    while i < len(s):
        if s[i].islower():
            minuscola = True
        elif s[i].isupper():
            maiuscola = True
        elif s[i].isdigit():
            cifra = True
        i += 1
    return minuscola and maiuscola and cifra



if __name__ == '__main__':
    s = input("Password: ")
    if verifica_password(s):
        print(f"{s} è valida")
    else:
        print(f"{s} NON è valida")
