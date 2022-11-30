q = int(input('Hello user enter a decimal number that convert want to convert to binary '))

result = ''

while q != 0:
    r = q % 2
    result = str(r) + result
    q = q // 2

print(result)