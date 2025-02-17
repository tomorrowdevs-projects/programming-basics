q = int(input("Insert a decimal number to convert in binary "))

result = ""

while q>0:
    r = q % 2
    result = str(r) + result
    q = q // 2

if result=="":
    result='0'

if q < 0:
    print("You should be insert a positive number")
else:
    print("The binary number equivalent is: {} ".format(result))