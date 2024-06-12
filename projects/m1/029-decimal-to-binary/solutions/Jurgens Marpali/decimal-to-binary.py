while True:
    q = int(input("Enter a decimal number"))
    
    result = ""

    while q > 0:
        r = q % 2
        result += str(r)
        q //= 2
        
    print("the binary number is", result[::-1])



