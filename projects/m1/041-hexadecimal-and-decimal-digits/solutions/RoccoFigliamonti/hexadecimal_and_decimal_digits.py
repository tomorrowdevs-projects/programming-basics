"""# Hexadecimal and Decimal Digits

Write two functions, *hex2int* and *int2hex*, that convert between hexadecimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) and decimal (base 10) integers. 

The *hex2int* function is responsible for converting a string containing a single hexadecimal digit to a base 10 integer,
while the *int2hex* function is responsible for converting an integer between 0 and 15 to a single hexadecimal digit.
Each function will take the value to convert as its only parameter and return the converted value as its only result.

Ensure that the *hex2int* function works correctly for both uppercase and lowercase letters.
Your functions should display a meaningful error message and end the program if the parameter’s value is outside of the expected range.
"""


def hex2int(num):
    num=str(num).lower()
    conversion = {"a":"10", "b":"11", "c":"12", "d":"13", "e":"14", "f":"15"}
    digits = set(str(i) for i in range(10))
    #print(digits)
    #print(type(digits))
    if num in digits:
        return num
    elif num in conversion:
        return conversion[num]
    else:
        mex = "ERROR: you should insert a number between 0 and 9 or a letter between 'a' and 'f'"
        return mex


print(hex2int(10))
print(hex2int("4"))
print(hex2int("C"))
print(hex2int("h"))




def int2hex(num):
    num=str(num)
    conversion = {"10":"a", "11":"b ", "12":"c", "13":"d", "14":"e", "15":"f"}
    digits = set(str(i) for i in range(10))
    #print(digits)
    #print(type(digits))
    if num in digits:
        return num
    elif num in conversion:
        return conversion[num]
    else:
        mex = "ERROR: you should insert a number between 0 and 15"
        return mex


print(int2hex(16))
print(int2hex(12))
print(int2hex("4"))
print(int2hex("c"))

