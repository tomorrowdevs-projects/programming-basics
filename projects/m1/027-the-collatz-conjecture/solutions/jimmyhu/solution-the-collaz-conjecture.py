def Collatz_Conjecture(number):
    numerlist = [number]
    last = numerlist[len(numerlist) - 1]
    while last != 1:
        if last % 2 == 0:
            newterm = int(last / 2)
        else:
            newterm = int((last * 3) + 1)
        numerlist.append(newterm)
        #refresh of the variable last
        last = numerlist[len(numerlist) - 1]
    return numerlist

initial = input('Enter your number: ')
if int(initial) > 0:
    while int(initial) > 0:
        print(Collatz_Conjecture(int(initial)))
        initial = input('\nEnter your new number: ')
    print('The End')
else:
    print('The End')