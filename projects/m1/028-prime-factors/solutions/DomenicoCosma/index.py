
num = int(input('Enter an integer (2 or greater):'))
factor = 2
if num < factor:
    print('Your number have to be greater then 1')
else:
    print(f'The prime factors of {num} are:')
while factor <= num:
        if num % factor == 0:
            num /= factor
            print(factor)
        else:
            factor += 1