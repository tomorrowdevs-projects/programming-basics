result = ''
while True:
    q = int(input('Insert a number: '))
    while q > 0:
        r = q % 2
        result += str(r)
        q //= 2
    
    
    print(result[::-1])
    result = ''
    

    



