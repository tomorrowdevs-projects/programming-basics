def proper_divisor():
    n = int(input('Hello USER enter a positive integer to evauleate all of the proper divisors: '))
    divisor = n
    proper_divisors = []

    while divisor != 0:
        if n % divisor == 0:
            proper_divisors.append(divisor)

        divisor = divisor - 1
        
    return proper_divisors

if __name__ == '__main__':
    print(proper_divisor())