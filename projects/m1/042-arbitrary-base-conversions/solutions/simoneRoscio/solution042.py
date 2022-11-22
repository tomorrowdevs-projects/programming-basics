# Conversion function
def int_to_base_x (base_10, base):
    converted_result = []
    letter = ['A', 'B', 'C', 'D', 'E', 'F']
    while base_10 != 0:

        quotient = base_10 // base
        reminder = base_10 % base

        if reminder >= 10:
            reminder = letter[reminder - 10]

        base_10 = quotient
        converted_result.append(reminder)

    reversed_result = converted_result[::-1]
        
    for num in reversed_result:
        print(num, end = '')

def base_x_to_int (base_x, num):
    letter = ['A', 'B', 'C', 'D', 'E', 'F']
    converted_result = []
    num = str(num)
    num_len = len(str(num))
    reverse_index = num_len - 1
    index = 0

    while index < num_len:

        single_num = (num[reverse_index - index])
        if single_num in letter:
            single_num = (ord(single_num) - 55)

        single_num = int(single_num)
        converted_value = single_num * (base_x ** index)       
        converted_result.append(converted_value)

        index = index + 1
        
    return(sum(converted_result))


if __name__ == '__main__':

    print('Hello user this program converts an integer between bases 2 and 16')

    starting_base = int(input('Enter the base of your integer: '))
    starting_int = str(input('Enter the integer to convert: '))
    converter_to = int(input('What basis do you want to convert it to? '))

if starting_base == 10:
    int_to_base_x(starting_int, converter_to)
else:
    if converter_to == 10:
        base_x_to_int(starting_base, starting_int)
    else:
        base_x_to_int(starting_base, starting_int)
        num = base_x_to_int(starting_base, starting_int)
        int_to_base_x(num, converter_to)