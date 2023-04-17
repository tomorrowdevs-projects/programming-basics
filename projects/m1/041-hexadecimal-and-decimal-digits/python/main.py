def hex2int(hex_input):
    hex_input = hex_input.upper()
    if hex_input == '0':
        return 0
    elif hex_input == '1':
        return 1
    elif hex_input == '2':
        return 2
    elif hex_input == '3':
        return 3
    elif hex_input == '4':
        return 4
    elif hex_input == '5':
        return 5
    elif hex_input == '6':
        return 6
    elif hex_input == '7':
        return 7
    elif hex_input == '8':
        return 8
    elif hex_input == '9':
        return 9
    elif hex_input == 'A':
        return 10
    elif hex_input == 'B':
        return 11
    elif hex_input == 'C':
        return 12
    elif hex_input == 'D':
        return 13
    elif hex_input == 'E':
        return 14
    elif hex_input == 'F':
        return 15
    else:
        assert False, "Input non valido. Inserire un carattere esadecimale (0-9, A-F)."

def int2hex(int_input):
    if int_input == 0:
        return '0'
    elif int_input == 1:
        return '1'
    elif int_input == 2:
        return '2'
    elif int_input == 3:
        return '3'
    elif int_input == 4:
        return '4'
    elif int_input == 5:
        return '5'
    elif int_input == 6:
        return '6'
    elif int_input == 7:
        return '7'
    elif int_input == 8:
        return '8'
    elif int_input == 9:
        return '9'
    elif int_input == 10:
        return 'A'
    elif int_input == 11:
        return 'B'
    elif int_input == 12:
        return 'C'
    elif int_input == 13:
        return 'D'
    elif int_input == 14:
        return 'E'
    elif int_input == 15:
        return 'F'
    else:
        assert False, "Input non valido. Inserire un numero intero tra 0 e 15."
        
hex_input = input("Insert a character from 0 to F: ")
dec_output = hex2int(hex_input)
print(dec_output)

int_input = int(input("Insert a number from 0 to 15: "))
hex_output = int2hex(int_input)
print(hex_output)