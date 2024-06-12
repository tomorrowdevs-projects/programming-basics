exa_list = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F']
def int2hex(number):
    if number < 0 or number > 15:
        print('ERROR! number out of range')
        return
    else:
        exa = exa_list[number]
        return exa
    
def hex2int(exa_number):
    exa_number = str(exa_number.upper())
    if exa_number not in exa_list:
        print('ERROR! number out of range')
        return 
    else:
        exa_number = exa_number.upper()
        int = exa_list.index(exa_number)    
    return int

def main():
    user_int = int(input('Insert a decimal digit to convert it to hexadecimal: '))
    print(int2hex(user_int))
    user_exa = str(input('Insert a hexadecimal digit to convert it to decimal: '))
    print(hex2int(user_exa))

main()



# Here there are the same functions that can convert every nummbers (not just between 0-15 and 0-F)
# I had some difficults whith the second one but I hope it' s ok

# def int2hex(number):
#     if number <= 9:
#         exa = str(number)
#     else:
#         exa = ''
#         while number > 0:
#             num = number // 16
#             val = number % 16
#             if val > 9:
#                 val = exa_list[val]
#             exa += str(val)
#             number = num
#     return print(exa[::-1])


# int2hex(4)
# int2hex(125)
# int2hex(4578)
# int2hex(41487)

# def hex2int(hexnumber):
#     hexnumber = hexnumber[::-1].upper()
#     number = 0
#     for i in range(0, len(hexnumber)):
#         convertion = exa_list.index(hexnumber[i])
#         number += convertion * 16 ** i

#     return print(number)

# hex2int('de2')
# hex2int('AA')
# hex2int('22')





