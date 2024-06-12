def roman_numerals(io):
    val ={'M':1000, 'D': 50, 'C':100,'L':50, 'X':10, 'Y':5, 'I':1 }
    
    if io == '':
        return 0
    elif  len(io) > 1:
        return io    
    else:
            if  roman_numerals(str[-2]) >=  roman_numerals(str[-1]):
                 return roman_numerals(str[:-2]) + roman_numerals(str[-2]) + roman_numerals(str[-1])
        
            else:
                 return roman_numerals(str[:-2]) + roman_numerals(str[-1]) - roman_numerals(str[-2])
    
def main():
    roman_numeral = input('Insert a roman numeral: ').upper()
    print(f'The roman numeral {roman_numeral} is the number {roman_numerals(roman_numeral)}.')



    
if __name__ == '__main__':
    main()


