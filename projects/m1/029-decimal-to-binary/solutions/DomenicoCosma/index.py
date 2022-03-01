
result = ""

q = int(input('Enter a number to convert it in binary'))

while q > 0:
    q = q // 2
    r = q % 2
    result += str(r)

print(result)