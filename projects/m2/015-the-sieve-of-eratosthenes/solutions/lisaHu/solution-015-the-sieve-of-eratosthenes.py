def cross_prime(n):
    p = 2
    numbers = []
    #every num in this range is appended to a list
    for i in range(p, n+1):
        numbers.append(i)
    #loop until p is smaller than n
    while p < n:
        #every num in the range will be checked if they are different from p and their remainder is 0
        #if they are, they will turned into 0 (p*p is to make the calculations)
        for i in range(p*p, n+1):
            if numbers[i-2] != p and numbers[i-2] % p == 0:
                numbers[i-2] = 0
        p += 1
    #loop until there is no 0 in list
    while 0 in numbers:
        #remove all 0 from list
        for i in numbers:
            if i == 0:
                numbers.remove(0)
    return numbers

if __name__ == '__main__':
    n = int(input(':'))
    print(cross_prime(n))