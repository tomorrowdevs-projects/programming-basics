from proper_divisors import proper_divisor

def perfect_number(n):

    if n == sum(proper_divisor(n)):
        return True
    else:
        return False

if __name__ == '__main__':

    perfect_numbers = []
    n = 1

    while (n <= 10000):
        if perfect_number(n) == True:
            perfect_numbers.append(n)
        n += 1

    print(perfect_numbers)
