#script converts decimal non negative integer to binary number

#initialize a list for catch each recursive 
list_to_output = []

def decimalTobinary(decimalNumber):
     
    decimal_to_int = int(decimalNumber)
    if decimal_to_int == 0:
        # base case 1
        list_to_output.append(0)
        return 0
    elif decimal_to_int == 1:
        #base case 2
        list_to_output.append(1)
        return 1
    else:
        #recursive case
        rest_of_division = decimal_to_int % 2
        list_to_output.append(rest_of_division)
        halfNumber = decimal_to_int / 2
        return decimalTobinary(halfNumber)

#catch the input from user
value_to_be_converted = input('Enter a non negative decimal number: ')

#check non negative number
if int(value_to_be_converted) < 0:
    print('This is a negative number, please enter a positive number.')
    exit()
else:
    decimalTobinary(value_to_be_converted)

#manage to get string from list
#reverse list
reverse_list = list_to_output[::-1]
#join to string
output_string = ''.join(map(str,reverse_list))

print(f'Decimal number {value_to_be_converted} is {output_string} in binary format')