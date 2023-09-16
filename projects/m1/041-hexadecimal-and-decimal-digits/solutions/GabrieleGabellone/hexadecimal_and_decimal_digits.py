# The function hex2int can convert the first 16 hexadecimal values in decimal.
# To write this function I interpreted the value entered by the user as a char of the ascii table and using the ord() function I calculated the decimal value 
def hex2int(hexadecimal):
    if len(hexadecimal) == 1:
        if 48 <= ord(hexadecimal) <= 57:
            integer = hexadecimal
            return (integer)
        elif 65 <= ord(hexadecimal.upper()) <= 70:
            integer = ord(hexadecimal.upper())-55
            return (integer)
    return ("Error! The parameter value is outside the expected range")

# The function int2hex can convert the first 16 decimal values in hexadecimal. Also to write this function, I referenced the ascii table.
def int2hex(integer):
    integer = int(integer)
    if 0 <= integer <= 9:
        hexadecimal = integer
        return (hexadecimal)
    elif 10 <= integer <= 15:
        hexadecimal = chr(integer + 55)    
        return (hexadecimal)
    else: return ("Error! The parameter value is outside the expected range")
    
def main():
    choice = int(input("1) Enter 1 for hex to dec\n2) Enter 2 for dec to hex\n3) Enter 0 to quit\nChoice: "))
    while choice != 0:
        if choice == 1: 
            value = input("Enter a hexadecimal value (0-F): ")
            print("Converted to the decimal value:", hex2int(value))
        elif choice == 2: 
            value = input("Enter a decimal value (0-15): ")
            print("Converted to the hexadecimal value:", int2hex(value))
        else: print("Choice not allowed!")
        choice = int(input("1) Enter 1 for hex to dec\n2) Enter 2 for dec to hex\n3) Enter 0 to quit\nChoice: "))

if __name__ == "__main__":
    main()