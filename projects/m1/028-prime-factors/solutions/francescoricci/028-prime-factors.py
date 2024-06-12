def isFactor(n,f):
    return False if n % f else True

def factorization(n,f):
    result = ''
    while (n >= 2):
        if isFactor(n,f):
            result += f'{str(f)} '
            n = n // f
            f = 2
        else:
            f += 1
    return(result)

print(factorization(72,2))






