#SUM OF DIGITS IN A INTEGER

#read a four-digit integer from the user
integer = input('Insert a four-digit number: ')

dig_1 = int(integer[0])
dig_2 = int(integer[1])
dig_3 = int(integer[2])
dig_4 = int(integer[3])

# display the sum of its digits
print(f'Sum: {dig_1}+{dig_2}+{dig_3}+{dig_4}={dig_1 + dig_2 + dig_3 + dig_4}')