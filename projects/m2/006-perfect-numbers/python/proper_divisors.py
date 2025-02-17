def proper_divisor(n):
    divisor = n - 1
    proper_divisors = []

    while divisor != 0:
        if n % divisor == 0:
            proper_divisors.append(divisor)

        divisor = divisor - 1

    return proper_divisors

if __name__ == '__main__':
    
    n = int(input('Hello USER enter a positive integer to evauleate all of the proper divisors: '))
    print(proper_divisor(n))