print('Hello USER, input a four-digit integer i will show you the truth!')
input_digit = int(input('Waiting: '))

# Ceck if the input isnt a four-digit integer

if len(str(input_digit)) is not 4:
    print('Give me at least a 4 digits integer.')

# If the input is a four-digit integer convert the input into a string, choose a digit with [index] and reconvert the string into integer

if len(str(input_digit)) is 4:
    digit_1 = str(input_digit)[0]
    digit_2 = str(input_digit)[1]
    digit_3 = str(input_digit)[2]
    digit_4 = str(input_digit)[3]

    digit_sum = int(digit_1) + int(digit_2) + int(digit_3) + int(digit_4)

    print (f'{digit_1} + {digit_2} + {digit_3} + {digit_4} = {digit_sum}')
    print('Brilliant!')