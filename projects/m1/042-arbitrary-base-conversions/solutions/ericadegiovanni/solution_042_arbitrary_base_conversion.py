
def base2dec(value, base): 
   
    # convert a value from an arbitrary base to base 10
    # recieve a value in a selected base
    # recieve a base of the insert value

    value = value.upper()
    value_base10 = 0
    position = len(value)-1

    for d in value:
        char = int(d, base)

        # convert to base 10                   
        value_base10 += char *(base**position)
        position -= 1
    #print(f'The number base 10 of {value} base {base} is {value_base10}.')
    return value_base10


def dec2base(value, base):

    # convert from base 10 to an arbitrary base
    #recieve a number base 10
    #recieve the base to convert the number
    #return the new number with the choosen base

    char = '0123456789ABCDEF'
    value_converted = ''

    while True:
        value_converted += char[value % base]
        value = value // base
        if value == 0:
            value_converted = value_converted[::-1]
            break
    print(f'The number converted in base {base} is {value_converted}.')
    return value_converted

#convert a number from one base to another.
def base_converter( start_base, value):

    value_base10 = base2dec(value, start_base)
    end_base = int(input('Insert the base to convert your number (from 2 to 16): '))
    if 1 < end_base < 17:
        dec2base(value_base10, end_base)
    else:
        print('You insert a wrong base.')
        return  

# main program that reads the bases and input number from the user.
def main():

    starting_base = int(input('Insert the starting base number (from 2 to 16): '))

    if 1 < starting_base < 17:
        starting_number = input('Insert the number to convert: ')
        base_converter(starting_base, starting_number) 
    else:
        print('You insert a wrong base.')
        return

if __name__ == '__main__':
    main()