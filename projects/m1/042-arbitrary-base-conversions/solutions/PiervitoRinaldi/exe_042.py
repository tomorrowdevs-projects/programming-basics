def random_base2decimal_base(number, base):
    if int(base) < 2 and int(base) > 16: 
        print('ERROR: choose base between 2 and 16')

    exponent = (len(number)) - 1 
    result = 0
    for digit in str(number):
        digit = int(digit)
        add = digit * (int(base) ** exponent)
        exponent -= 1
        result += add

    result = 'Your converted decimal number, with base ' + str(base) + ' is: ' + str(result)
    return result

def decimal_base2random_base(number, base):
    number = int(number)
    base = int(base)
    result = ''
    check = True
    while check == True:
        q = number // base
        r = number % base
        number = q 
        result += str(r)
        if q == 0:
            check = False
            break
    result = 'Your converted number in base ' + str(base) + ' is: ' + str(result[::-1])
    return result

def main():
    print('Enter the number and its base to convert it in to a decimal number')
    number = input('Number: ')
    base = input('Base: ')
    print(random_base2decimal_base(number, base))
    print('Enter decimal number. So, choose the base to convert it')
    number = input('Number: ')
    base = input('Base: ')
    print(decimal_base2random_base(number, base))
