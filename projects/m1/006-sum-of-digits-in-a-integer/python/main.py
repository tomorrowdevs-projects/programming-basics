val_integer_num = int(input('Please enter a fourth-digits number'))

val_string_num = str(val_integer_num)

if len(val_string_num) !=4:
    print('You have to enter a fourth digits number.')
    
else:
    sum_of_digits = int(val_string_num[0])+int(val_string_num[1])+int(val_string_num[2])+int(val_string_num[3])
    print('The digits sum of the number', val_integer_num,'is', sum_of_digits)