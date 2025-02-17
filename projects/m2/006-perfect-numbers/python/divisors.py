def proper_divisors(n: int) -> list:
    '''
    return a list of all proper divisors of 'n'
    ''' 
    divisors=[]

    for i in range(1,n):
        if n % i == 0:
            divisors.append(i)

    return divisors

if __name__=="__main__":
    number = int(input("Insert a number "))
    print(proper_divisors(number))