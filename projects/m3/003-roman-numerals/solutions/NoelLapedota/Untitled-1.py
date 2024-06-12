def roman_numerals(str):
    val ={'M':1000, 'D': 500, 'C':100, 'L':50, 'X':10, 'Y':5, 'I':1}
    
    if str == '':
        return 0
    else:
        x = val[str[0]]
        result =  roman_numerals(str[1:])

        return  x + result
print(roman_numerals('MCLX'))        