
#convert a decimal (base 10) number to binary (base 2) using the division algorithm
result = ''
decimal_user = q = int(input('Insert a decimal number to convert in binary (base 2): '))

while q > 0:
   r = str(q % 2)
   result = r + result 
   q //= 2

print(f'The binary equivalent of the decimal number {decimal_user} is {result}.')
