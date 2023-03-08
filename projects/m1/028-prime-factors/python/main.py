factor = 2

choise = int(input('Enter a number 2 of + of 2: '))
if choise < 2:
    choise = int(input('Your number need to be 2 or 2+: '))
while factor <= choise:
    if choise % factor == 0:
        choise = choise // factor
        print(factor)
    elif choise % factor != 0:
        factor = factor + 1
        choise = choise // factor
        print(factor)