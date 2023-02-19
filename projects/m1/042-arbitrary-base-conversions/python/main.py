def base_10_to_base_x(n, base_to_convert):

    converted_digit = []
    n = int(n)

    while n != 0:
        reminder = n % base_to_convert

        if reminder >= 10:
            ASCII_code = reminder + 55
            reminder = chr(ASCII_code)

        reminder = str(reminder)
        converted_digit.append(reminder)

        n = n // base_to_convert

    reversed_digit = converted_digit[::-1]
    converted_string = ''.join(reversed_digit)
    return(converted_string)

def base_x_to_base_10(n, from_base):

        converted_digit = []
        exponent = len(str(n)) - 1
        
        for letter in n:
            letter = ord(letter)

            if 57 >= letter >= 48:
                letter = int(chr(letter))
            
            elif 70 >= letter >= 65:
                letter -= 55

            decimal_calculation = letter * (from_base ** exponent)
            exponent -= 1
            converted_digit.append(decimal_calculation)

        digit_sum = sum(converted_digit)
        return(digit_sum)

def base_input(n, starting_base):
    for number in n:
            number = int(number)
            if number > starting_base:
                print('Too high digit for this base')

            if 2 <= starting_base <= 16:
                to_base = int(input('Enter the base where you want to convert the number: '))
                if 2 <= to_base <= 16:
                    if starting_base == 10:
                        print(base_10_to_base_x(n, to_base))
                    elif to_base == 10:
                        print(base_x_to_base_10(n, starting_base))
                    else:
                        conv_num = base_x_to_base_10(n, starting_base)
                        print(base_10_to_base_x(conv_num, to_base))

            else:
                print('Enter a base between 2 to 16')

if __name__ == '__main__':
    print('Hello user enter a digit between base 2 to 16 to convert it into another base')
    n = str(input('Enter a number to convert: '))
    starting_base = int(input("Enter the base of the number you want to convert: "))

    base_input(n, starting_base)