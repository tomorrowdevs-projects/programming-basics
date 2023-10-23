def count_bits(n):
    sum = 0

    while n > 0:
        if n % 2 != 0:
            sum += 1
        else:
            sum += 0
        n = int(n/2)
    
    return sum
