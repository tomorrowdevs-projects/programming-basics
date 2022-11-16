# The error_checking function first checks if the entered base is in the range 2 to 16 and then if the number is a number in that base.
def error_checking(number, base):
    if base < 2 or base > 16: 
        return print("Error! You have choosen a base outside the expected range(2-16)")
    hex_digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    number = str(number)
    for digit in number:
        if digit.upper() not in hex_digits[:base]:
            return print("Error! The number entered is not a base {} number".format(base))
    return(True)

# The arb_to_dec function takes a number and its base as parameters and returns the number in decimal base.
def arb_to_dec(number, from_base):
    hex_digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    n = len(number) - 1
    result = 0
    for digit in number:
        if digit not in hex_digits: digit = digit.upper()
        d = hex_digits.index(digit)
        result += d * from_base**n
        n -= 1
    return(result)

# The dec_to_arb function takes as parameters a decimal number and the base to which it must be converted, it returns the number converted to that base.
def dec_to_arb(number, to_base):
    hex_digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]    
    result = ""
    q = int(number)
    if number != 0:
        while q != 0:          
            r = q % to_base
            result = hex_digits[r] + result
            q = q // to_base        
        return(result)         
    else: result = 0
    return(result)

# Main program that allows the user to choose what type of conversion to perform.
def main():
    print("1) Enter 1 to convert from an arbitrary base to base 10")
    print("2) Enter 2 to convert from base 10 to an arbitrary base")
    print("3) Enter 3 to convert from an arbitrary to an arbitrary base")
    print("4) Enter 0 to quit")
    choice = input("Enter a choice: ")
    while choice != "1" and choice != "2" and choice != "3" and choice != "0": 
        choice = input("Choice not allowed! Enter a valid choice: ")
    if choice != "0":
        if choice == "1":
            number = input("Enter the number to convert to base 10: ")
            convert_from_base = int(input("Enter the base of the number: "))
            if error_checking(number, convert_from_base) == True:
                converted_number = arb_to_dec(number, convert_from_base)
                print("Number converted to {} base 10".format(converted_number))
        elif choice == "2":
            number = input("Enter a base 10 number to convert: ")
            if error_checking(number, 10) == True:
                convert_to_base = int(input("What base do you want to convert to? "))
                if convert_to_base < 2 or convert_to_base > 16:
                    print("Error! You have choosen a base outside the expected range(2-16)")
                else:
                    converted_number = dec_to_arb(number, convert_to_base)
                    print("Number converted to {} base {}".format(converted_number, convert_to_base))
        elif choice == "3":
            number = input("Enter a number to convert: ")
            convert_from_base = int(input("Enter the base of the number: "))
            if error_checking(number, convert_from_base) == True:
                convert_to_base = int(input("What base do you want to convert to? "))
                if convert_to_base < 2 or convert_to_base > 16:
                    print("Error! You have choosen a base outside the expected range(2-16)")
                else:
                    converted_to_decimal = arb_to_dec(number, convert_from_base)
                    converted_number = dec_to_arb (converted_to_decimal, convert_to_base)
                    print("Number converted to {} base {}".format(converted_number, convert_to_base))

if __name__ == "__main__":
    main()