result = ''

q = int(input('Type a number to convert in binary: '))

while q != 0:
    r = q % 2
    result += str(r)
    q = q // 2
print(f'The binary value of the number is : {result}')