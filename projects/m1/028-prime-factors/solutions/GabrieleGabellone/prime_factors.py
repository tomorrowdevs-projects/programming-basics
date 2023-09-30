# Prime Factors
# this program performs the prime factorization of an integer n entered by the user
factor = 2
while True:
    n = int(input("Enter an integer: "))
    if n >= factor: 
        print("The prime factors of", n, "are:")
        while factor <= n:
            if n % factor == 0: 
                print(factor)
                n = n // factor
            else: factor += 1
    else: 
        print("Error! Enter an integer greater than or equal to 2") 
        continue
    break