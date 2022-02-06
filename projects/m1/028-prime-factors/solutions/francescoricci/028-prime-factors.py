def isFactory(n,f):
    return False if n % f else True

def factorization(n,f):
    result = ''
    while (n >= 2):
        if isFactory(n,f):
            result += f'{str(f)} '
            n = n // f
            f = 2
        else:
            f += 1
    return(result)

print(factorization(18,2))






