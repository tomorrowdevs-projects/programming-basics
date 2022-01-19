def roman_converter(roman):
    values = {
        'M': 1000 ,
        'D': 500 ,
        'C': 100 ,
        'L': 50 ,
        'X': 10 ,
        'V': 5 ,
        'I': 1 ,
    }
    if len(roman) == 1:
        return values[roman[0]]
    else:
        if values[roman[0]] >= values[roman[1]]:
            return values[roman[0]] + roman_converter(roman[1:])
        elif values[roman[0]] < values[roman[1]]:
            return  roman_converter(roman[1:]) - values[roman[0]] 

def main():
    toconvert = input('Enter the roman number to convert: ').upper()
    print(roman_converter(toconvert))
if __name__=='__main__':
    main()