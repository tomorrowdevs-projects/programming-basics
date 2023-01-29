

n = int(input("Insert an Integer Number greater than or equal to Two : "))

factor = 2

if (n<2):
    print("Input Error: a Number less than Two was entered")
else:
    print("The prime factors of", n, " are: ")
        
while(n>=2):
    
    if n % (factor) == 0:
        n=n//factor
        print(factor)
    else:
        factor+=1

    
        
 