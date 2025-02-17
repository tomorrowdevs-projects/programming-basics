import string

dec_n = int(input('Enter decimal number: '))

def hex2int(hex_n):
    exponent = ((len(hex_n)) - 1)
    letter_range = string.ascii_letters[0:6] + string.ascii_letters[26:32]  # I choose only abcdf and ABCDF
    numbers = string.digits
    result = 0
    check = True # This check will be useful to find letter out the range

    for x in hex_n:
        if x in numbers:
            x = int(x)
            add = x * (16 ** exponent)
            exponent -= 1
            result += add
            continue

        if x not in letter_range: 
            check = False

        elif x in letter_range:
            if x == 'a' or x == 'A':
                x = 10
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue
            elif x == 'b' or x == 'B':
                x = 11
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue
            elif x == 'c' or x == 'C':
                x = 12
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue
            elif x == 'd' or x == 'D':
                x = 13
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue
            elif x == 'e' or x == 'E':
                x = 14
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue
            elif x == 'f' or x == 'F':
                x = 15
                add = x * (16 ** exponent)
                exponent -= 1
                result += add
                continue

    if check == False:
        print('ERROR: Parameter’s value is outside of the expected range.')
    else:
        print(result)


def int2hex(dec_n):
    check = True
    if dec_n <= 9:
        result = dec_n
    elif dec_n == 10 :
        result = 'A'
    elif dec_n == 11:
        result = 'B'
    elif dec_n == 12:
        result = 'C'
    elif dec_n == 13:
        result = 'D'
    elif dec_n == 14:
        result = 'E'
    elif dec_n == 15:
        result = 'F'
    else:
        check = False
                

    if check == False:
        print('ERROR: Parameter’s value is outside of the expected range.')
    else:
        print(result)



    
