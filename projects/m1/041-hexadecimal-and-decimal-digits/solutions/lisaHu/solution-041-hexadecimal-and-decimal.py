#list of hexidecimal that functions will refer to
hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

#the function will check if the hexidecimal is in list. If it is, it will create a new variable that
#has as value the numerical position of the hexidecimal entered in list and it will print the result
def hex2int(value):
    if value in hexidecimal:
        new_int = hexidecimal.index(value)
        return print(new_int)
    else:
        print('The entered value is not in range')

#the function check if the integer is in between range. If it is, it will create a new variable that
#will store the element in list through the list.index with integer entered
def int2hex(value):
    if 0 <= value <= 16:
        new_hex = hexidecimal[value]
        return print(new_hex)
    else:
        print('The entered value is not in range')

#get input from user, make variable HEX uppercase and call functions
hex = input('Enter number between 0 and 9 or letter between A and F:  ')
hex = hex.upper()
hex2int(hex)
int = int(input('Enter number between 0 and 15:  '))
int2hex(int)