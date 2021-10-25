while True:
    number = int(input("Enter a decimal number: "))
    q = number
    result = ""
    
    if number == 0:
        print("The binary number of 0 is 0")
        break
    else:
        while q > 0 :
            r = q % 2
            result += str(r)
            q //= 2
        break

print(f"The binary number of {number} is {result[::-1]}")
