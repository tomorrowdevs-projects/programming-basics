roman_numerals = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
    }   
    
def roman_to_int(roman):
    if roman == "":
        return 0
    elif len(roman) == 1:
        return roman_numerals[roman[0]]
    else:
        if roman_numerals[roman[0]] >= roman_numerals[roman[1]]:
            return roman_to_int(roman[0+1:]) + roman_numerals[roman[0]]
        elif roman_numerals[roman[0]] < roman_numerals[roman[1]]:
            return roman_to_int(roman[0+1:]) - roman_numerals[roman[0]]
            
def main():
    user_roman = input("Enter a roman number to convert: ")
    print(roman_to_int(user_roman))
    
if __name__ == "__main__":
    main()
