def da_dieci_a_x(numero,base):
    nuovo = ""
    lettere = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    quoziente = numero // base
    resto = numero % base
    nuovo = f"{lettere[resto]}" + nuovo
    while(quoziente!=0):
        resto = quoziente % base
        nuovo = f"{lettere[resto]}" + nuovo
        quoziente = quoziente // base
    return nuovo
def da_x_a_10(numero,base):
    lettere = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    j=0
    nuovo=0
    for i in range(len(str(numero))-1,-1,-1):
        nuovo+=lettere.index(numero[i])*base**j
        j+=1
    return nuovo

if __name__ == '__main__':
    numero=input("Numero da convertire: ")
    partenza=int(input("Base di partenza: "))
    if partenza<2 or partenza>16:
        print("La base di partenza deve essere compresa tra 2 e 16")
        partenza = int(input("Base di partenza: "))
    arrivo=int(input("Base di arrivo: "))
    if arrivo<2 or arrivo>16:
        print("La base di arrivo deve essere compresa tra 2 e 16")
        arrivo = int(input("Base di arrivo: "))
    intermedio=da_x_a_10(numero, partenza)
    finale=da_dieci_a_x(int(intermedio),arrivo)
    print(f" {numero} in base {partenza} è uguale a {finale} in base {arrivo}")
