input_integer = int(input('Please insert an integer with four digits: '))
if input_integer < 1000:
    print('Error. This program require an integer with four digits.')
    exit()
elif input_integer > 9999:
    print('Error. The number is too large.')
    exit()

int_for_sum1 = input_integer // 1000
new_integer = int(((input_integer / 1000) % 1) * 1000)

int_for_sum2 = new_integer // 100
new_integer = int(((input_integer / 100) % 1) * 100)

int_for_sum3 = new_integer // 10
new_integer = int(((input_integer / 10) % 1) * 10)

sum_integers = int_for_sum1 + int_for_sum2 + int_for_sum3 + new_integer
print( int_for_sum1, '+', int_for_sum2, '+', int_for_sum3, '+', new_integer, '=', sum_integers)
    
