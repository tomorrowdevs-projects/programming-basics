"""
Write two functions, *hex2int* and *int2hex*, that convert between hexadecimal digits
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) and decimal (base 10) integers.
The *hex2int* function is responsible for converting a string containing a single hexadecimal
digit to a base 10 integer, while the *int2hex* function is responsible for converting
an integer between 0 and 15 to a single hexadecimal digit.
Each function will take the value to convert as its only parameter and
return the converted value as its only result.
Ensure that the *hex2int* function works correctly for both uppercase and lowercase letters.
Your functions should display a meaningful error message and end the program if
the parameter’s value is outside of the expected range.

"""
interi=['0','1','2','3','4','5','6','7','8','9']
esadecimali=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','a','b','c','d','e','f']
def hex2int(s):
    print(int(s,16))

def int2hex(s):
    print(hex(s))

if __name__ == '__main__':
    s = input("Inserisci un numero esadecimale da convertire in decimale")
    vero=0
    for i in s:
        if i in esadecimali:
            vero=1
        else:
            break
    if vero==1:
        s = '0x' + s
        hex2int(s)
    else:
        print("Sono state inserite cifre che non sono esadecimali; prego inserire cifre da [0-9] o [A-F]")
    vero=0
    a=input("Inserisci un numero decimale da convertire in esadecimale:")
    if a.isdecimal():
        num=int(a)
        int2hex(num)
    else:
        print("Sono state inserite cifre che non sono decimali; prego inserire cifre da [0-9]")