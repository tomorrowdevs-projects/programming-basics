def division (i):
    num = 1
    divisors = []
    #loop until all divisors smaller than i are found
    while num < i:
        if i % num == 0:
            divisors.append(num)
            #add 1 to num for the next itiration
            num += 1
        else:
            num += 1
    #check if sum of divisors equals to number and return True/False
    if sum(divisors) == i:
        return True
    else:
        return False

if __name__=='__main__':
    print('The perfect numbers are:')
    #call function for each number in this range and print only perfect one
    for n in range(1,10000):
        if division(n) == True:
            print(n)
        else:
            continue