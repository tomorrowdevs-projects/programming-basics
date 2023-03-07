number = int(input('type a number: '))
factor = 2
result = ''

if number < 2:
    print('number must be grater or, at least, equal to 2')
    quit()


while number >= factor:
    if number % factor == 0:
        number = number / factor
        result += ' ' + str(factor)
    else:
        factor += 1

print(result)