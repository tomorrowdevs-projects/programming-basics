
result = ""

num = int(input('Enter a integer number greater then 0 to convert it in binary'))
q = num
while q > 0:
    q = q // 2
    r = q % 2
    result += str(r)

print(f'This is the binary of {num}: {result}')