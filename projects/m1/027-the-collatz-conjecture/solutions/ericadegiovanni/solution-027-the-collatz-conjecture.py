
# read an integer n and reports all of the values in sequence (from n to 1) using the Collatz conjecture
# at the end ask the user for another integer to continue
# the user quit when enters a value  <= 0

n = int(input('Insert a positive integer: '))

while n > 0:
    print(n)
    if n == 1:
         n = int(input('Insert a number: ') )          
    elif n % 2 == 0:
        n = n // 2   
    else:
        n = n * 3 + 1

  
       
