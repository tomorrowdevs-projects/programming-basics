
num = int(input('enter a number bigger then 1 to see the Collatz conjecture or a number equal or less then 0 to stop the sequence'))
while num != 1:
    if num % 2 == 0:                  #se num è pari, il suo risultato sarà diviso per 2 e a suo volta se il risultato è pari sarà diviso per due,
        num = num // 2                #ma se il risultato è dispari, verrà moltiplicato per 3 piu 1 fino a quando la sequenza non sarà uguale a 1
        print(num)
    else:
        num = num*3 + 1
        print(num)
    if num == 1:
        num = int(input('enter a number'))
    if num <= 0:
        print('You decide to stop the sequence')
        break