
while True:
    result = ''
    q = int(input('Enter decimal number: '))
    if q == 0:
        print('The binary number is 0')
        break

    while True:
        r = q % 2
        result = result+ str(r)
        q = q // 2
        if q == 0:
            break

    print('The binary number is: ' , result)



