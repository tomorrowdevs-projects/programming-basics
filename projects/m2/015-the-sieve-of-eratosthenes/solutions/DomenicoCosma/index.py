
#function that prints all the prime numbers until a limit number chosen by the user

def prime():
    p = 2
    stop = int(input('Enter a limit number greater then 2 ...'))
    for val in range(p,stop):
        for n in range(p,val):
                if (val % n) == 0:                                 #if the modulus from a val in range(2 and limit number chosen by the user) is equal to 0 it means that number is not prime
                    print(0, end=' ')
                    break
        else:
            print(val, end=' ')


prime()