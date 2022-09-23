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
    return divisors

if __name__=='__main__':
    integer = int(input('Enter a positive number: '))
    #check if integer is a positive number
    if integer < 0:
        print('Error: enter a bigger number')
    else:
        print(division(integer))