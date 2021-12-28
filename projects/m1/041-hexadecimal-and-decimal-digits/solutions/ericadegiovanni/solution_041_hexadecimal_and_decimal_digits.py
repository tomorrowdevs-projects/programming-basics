
#convert a string containing a single hexadecimal digit to a base 10 integer
hexadecimal_values = "0123456789ABCDEF"
     
def hex2int(value): 

    # work with upper/lowercase letters 
    # reverse value to gain the hex digit position
    value = value.upper()[::-1] 
    converted_int = 0

    for d in value:
        hex_char = hexadecimal_values.find(d) # = int(d, 16)
        hex_position = value.find(d)

        # convert hex to int base 10                   
        converted_int += hex_char *(16**hex_position) 

    if -1 < converted_int < 16:
        print(f'The decimal (base 10) of {value} is: {converted_int}')
    else:
        print('The parameter is out of range.')
        return False
            
#integer between 0 and 15 to a single hexadecimal digit.
def int2hex(value):
    if -1 < value < 16:
        converted_hex = hexadecimal_values[value]
        print(f'The hexadecimal digit of the decimal (base 10) number {value} is: {converted_hex}')
    else:
        print('The parameter is out of range.')
        return False
    
# display a meaningful error message and end the program 
# if the parameter’s value is outside of the expected range.
def main():
    hex_user= input('Insert an hexadecimal digit (between 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F): ')
    if hex2int(hex_user) != False:
        pass
    else:
        return

    int_user = int(input('Insert a decimal number between 0 and 15: '))
    if int2hex(int_user) != False:
            pass
    else:
            return

if __name__ == '__main__':
    main()

