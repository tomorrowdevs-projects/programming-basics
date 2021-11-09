price = "{:.0f}".format(float(input("prezzo del bene ")) * 100 )
payment = "{:.0f}".format(float(input("totale pagato ")) * 100 )
def verify (x,y):
    difference = int(x) - int(y)
    if difference == 0:
        print('Nessun resto dovuto')
    elif difference < 0:
        print('Il pagamento non è sufficiente')
    else:
        return difference
change = verify (payment,price)
def coins (c):
    toonie = 0
    loonie = 0
    quater = 0
    dime = 0
    nickel = 0
    pennie = 0
    while c > 0:
        if c >= 200:
            toonie += 1
            c -= 200
        elif c < 200 and c >= 100:
            loonie += 1
            c -= 100
        elif c < 100 and c >= 25:
            quater += 1
            c-= 25
        elif c < 25 and c >= 10:
            dime += 1
            c -= 10
        elif c < 10 and c >= 5:
            nickel += 1
            c -= 5
        elif c < 5:
            pennie = c 
            c = c * 0
    else:
        print('your change is: ' + str(toonie) + ' toonie ' + str(loonie) + ' loonie ' + str(quater) + ' quater ' + str(dime) + ' dime ' + str(nickel) + ' nickel ' + str(pennie) + ' pennie ')
coins(change)

