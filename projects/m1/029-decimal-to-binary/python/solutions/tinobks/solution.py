result = ""
q = int(input("Enter the number to convert: "))

while q != 0:
    r = q % 2
    result = result + str(r)
    q = q // 2

print(("The number in binary is: {}") .format(result))

