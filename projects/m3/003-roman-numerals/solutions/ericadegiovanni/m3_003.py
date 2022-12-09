

def roman_toNumerals(numeral):

    """
    Create a recursive function that converts a Roman numeral to an integer. 
    """

    roman = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    
    len_str = len(list(numeral))

    #  Use an empty string, which has the value 0, for the base case.
    if numeral == '':
        return 0

    # process one or two characters at the beginning of the string, 
    # and then call itself recursively on all of the unprocessed characters.
    else:   
        if len_str > 1:
            if roman[numeral[-2]] >= roman[numeral[-1]]:
                return  roman_toNumerals(numeral[:-2]) + roman[numeral[-2]] + roman[numeral[-1]] 
            else:
                return roman_toNumerals(numeral[:-2]) + (roman[numeral[-1]] - roman[numeral[-2]]) 
        elif len_str == 1:
            return  roman_toNumerals(numeral[:-2]) + roman[numeral[0]] 
         
# write a main program that reads a Roman numeral from the user and displays its value.
def main():
    roman_numeral = input('Insert a roman numeral: ').upper()
    print(f'The roman numeral {roman_numeral} is the number {roman_toNumerals(roman_numeral)}.')


if __name__ == '__main__':
    main()