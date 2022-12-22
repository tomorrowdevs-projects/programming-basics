#input from user + creation of empty var to store the result
q = int(input("Enter an integer:  "))
result = ""

#creation of loop with condition to break if the number from user computes to 0
while True:
    r = q % 2
    result += str(r)
    q = q // 2
    if q == 0:
        break
    else:
        continue

#print of message and result
print('The binary number is:')
print(result[::-1])