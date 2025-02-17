def hex_to_int(hex_digit: str) -> int:
    '''
    It converts an hexadecimal digits to a 10 base integer

    param: hex_digit: str. It'an hexadecimal digits (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F). Error is displayed if the parameter does not respect the format.
    return: 10-base integer conversion

    '''

    hexadecimal_digits = "0123456789ABCDEF"

    hex_digit =hex_digit.upper()
    if  hex_digit in hexadecimal_digits:
        
        index = 0
        founded = False
        while index < len(hexadecimal_digits) and not founded:
            if hex_digit == hexadecimal_digits[index]:
                founded = True
            else:
                index += 1
        if founded:
            return index
    else:
        print("Error! Must insert an hexadecimal digit")
        exit()


def int_to_hex (int_digit: int) -> str:
    '''
    It converts a 10 base integer (from 0 to 15) in an hexadecimal digits.

    param: int_digit: int. It'an integer from 0 to 15. Error is displayed if the parameter does not respect the format.
    return: an hexadecimal digits (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)
    '''

    if 0 <= int_digit <= 9:
        return str(int_digit)
    elif 10 <= int_digit <= 15:
        hexa_digits="ABCDEF"
        return hexa_digits[int_digit-10]
    else:
        print("Error! Must insert an integer between 0 and 15")
        exit()