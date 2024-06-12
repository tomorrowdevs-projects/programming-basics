
def hex2int(hexa):
    valid_hex = "0123456789ABCDEFabcdef"
    if hexa in valid_hex and len(hexa) == 1:    
        return int(hexa, 16)

def int2hex(num):
    if 0 <= num <=15:
        return hex(num)


hexa = input("Insert a single hexadecimal digit to convert into integer:\n")
if hex2int(hexa):
    print(hex2int(hexa))
else:
    if len(hexa) > 1:
        print("Error. You have inserted more than one digit.")
    else:
        print("Error. Your digit is not in an hexadecimal valid character.")


num = int(input("Digit a number between 0 and 15:\n"))
if int2hex(num):
    print(int2hex(num))
else:
    print("Error. Your number is out of range.")
