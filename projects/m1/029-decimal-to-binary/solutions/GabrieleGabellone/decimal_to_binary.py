# Decimal to Binary

number = int(input("Enter the number to convert: "))
q = number #Let q represent the number to convert
result = "" #Let result be an empty string
if number != 0: 
    while q != 0:
        r = q % 2 #Set r equal to the remainder when q is divided by 2
        result = str(r) + result[0:] #Convert r to a string and add it to the beginning of result
        q = q // 2 #Divide q by 2, discarding any remainder, and store the result back into q until q is 0
else: result = 0
print("The binary representation of", number, "is", result)