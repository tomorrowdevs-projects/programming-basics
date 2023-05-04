input_integer = int(input('Please insert an integer with four digits: '))
if input_integer < 1000:
    print('Error. This program require an integer with four digits.')

elif input_integer > 9999:
    print('Error. The number is too large.')

else:
    i = 1000
    list_integer = []
    new_integer = input_integer
    
    while i >= 1:
        int_for_sum = new_integer // i
        new_integer = int(((input_integer / i) % 1) * i)
        list_integer.append(int_for_sum)
        i = int(i / 10)

    list_sum = print(list_integer[0], '+', list_integer[1], '+', list_integer[2], '+', list_integer[3], '=', sum(list_integer))

