decimal = int(input('Enter you decimal number: '))
binarynum = []
while decimal != 0:
    temp = decimal % 2
    binarynum.insert(0,str(temp))
    decimal = int(decimal / 2)
print(''.join(binarynum))