# Ask the user to insert a four-digit integer
integer = int(input('insert a number with four-digit: '))

# Since I don't want to use "if" statement, I can't check if the number has four digits.
# To solve that problem, I decided to format the number with leading zeros if the number
# has less than four digits, to truncate the number otherwise.

form = '{:04d}'
integer = form.format(integer)
integer = integer[:4]

# Calculate and display the sum of the digits
sum = int(integer[0]) + int(integer[1]) + int(integer[2]) + int(integer[3])
txt = integer[0] + '+' + integer[1] + '+' + integer[2] + '+' + integer[3] + '=' + str(sum)
print('The sum of its digits is: ' + txt)
