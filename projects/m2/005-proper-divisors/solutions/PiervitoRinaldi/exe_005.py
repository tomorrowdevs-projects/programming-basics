def proper_divisors(n):
    results = []
    divisor = n 

    while divisor >= 1:
        if n % divisor == 0:
            results.append(divisor)
        divisor -= 1
    
    return results
        
def main():
    n = int(input('Enter number to know its proper divors: '))
    print(proper_divisors(n))
