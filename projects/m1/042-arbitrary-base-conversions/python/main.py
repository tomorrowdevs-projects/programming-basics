import hexadecimal

def convert_to_10_base(number: str,from_base: int) -> int:
    '''
    Converts 'number' from base 'from_base' to 10 base
    '''

    decimal_number = 0
    index = 1
    for digit in number:
        if digit not in "0123456789":
            dec_digit = hexadecimal.hex_to_int(digit)
        else:
            dec_digit = int(digit)
        decimal_number += dec_digit * from_base**(len(number)-index)
        index+= 1

    return decimal_number

def convert_from_10_base(number: str,to_base: int) -> str:
    '''
    Converts 'number' from 10-base to 'to_base'

    '''

    result = ""
    number = int(number)

    while number>0:
        rest = number % to_base
        if rest > 9:
            rest = hexadecimal.int_to_hex(rest)
        result = str(rest) + result
        number = number // to_base

    if result == "":
        return '0'

    return result

def check_digits(number:str, base: int)-> bool:
    '''
    Check if 'number' can be represented in 'base'base.
    Return True if yes or False if not
    '''
    
    digits_admitted = ""
    for index in range(0,base):
        if index <= 9:
            digits_admitted += str(index)
        else:
            digits_admitted += hexadecimal.int_to_hex(index)
    check = True
    index = 0
    number = number.upper()
    while check and index < len(number):
        if number[index] not in digits_admitted:
            check = False
        index += 1
    return check

def arbitrary_base_conversion(number: str, from_base: int, to_base: int) -> str:
    if not(2<= from_base <=16) or not(2<= to_base <=16):
        print("Error! Insert a base from 2 to 16")
        exit()
    if not check_digits(number,from_base):
        print("Error! Number {} can't be represented in base {}".format(number,from_base))
        exit()

    result_number = convert_to_10_base(number,from_base)
    return convert_from_10_base(result_number,to_base)

numb = (input("Number: "))
f_base = int(input("From base: "))
t_base = int(input("To Base: "))

print("Result is {} ".format(arbitrary_base_conversion(numb,f_base,t_base)))
