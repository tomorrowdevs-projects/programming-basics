
while True:
    n = int(input("Enter a number(greater than 2): "))
    dividend_n = n
    factor = 2
    
    if n < factor :
        print("Please enter a number grater than 2.")
        continue

    else:
        while factor <= dividend_n:
            if dividend_n % factor == 0:
                dividend_n //= factor
                print(factor)
                continue
                
            else:
                factor += 1
                continue
        break