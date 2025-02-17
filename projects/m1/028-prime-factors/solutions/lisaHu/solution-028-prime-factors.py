#input of the number and if statement to check if it's bigger than 2
n = int(input('Enter an integer (2 or greater):  '))
if n < 2:
    print('Please, enter a bigger integer.')
print('The prime numbers of ' + str(n) + ' are:')

#loop to divide the number with the prime factor.
while True:
    factor = 2
    while factor <= n:
        if n % factor == 0:
            print(factor)
            n = n / factor
        else:
            factor += 1