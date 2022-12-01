def hex_2_int(hex):
    if len(hex) > 1:
        print('Please enter an hexadecimal value between 0 and F')
    else:
        ord_hex = ord(hex)   

    # 0-9
    if 48 <= ord_hex <= 57:
        print(hex)
    # A-F
    elif 65 <= ord_hex <= 70:
        hex = ord_hex - 55
        print(hex)
    # a-f
    elif 97 <= ord_hex <= 102:
        hex = ord_hex - 87
        print(hex)
    else:
        print('Please enter an hexadecimal value between 0 and F')


def int_2_hex(integer):
    if (integer < 0) or (integer > 15):
        print('Please enter a decimal value between 0 and 15')
    elif 0 <= integer <= 9:
        print(integer)
    elif 10 <= integer <= 15:
        print(chr(integer + 55))

def question_choise(question):
    if question == 1:
        hex = input('Enter an hexadecimal value between 0 and F to convert: ')
        hex_2_int(hex)
    elif question == 2:
        intr = int(input('Enter a decimal value between 0 and 15 to convert: '))
        int_2_hex(intr)

if __name__ == '__main__':

    question = int(input('Do you want to (1) convert hexadecimal to decimal or (2) decimal to hexadecimal?'))
    question_choise(question)