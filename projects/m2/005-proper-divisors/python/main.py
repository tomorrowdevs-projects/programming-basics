def positive_integer(n):
    divisors = []
    for i in range(1, n+1): #n+1 because i need to consider also the n itself for division
        if n % i == 0:
            divisors.append(i)
        else:
            continue 
    return divisors

n = int(input('Enter a number: '))
divisors = positive_integer(n)
print(divisors)