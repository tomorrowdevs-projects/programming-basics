def decimal_to_binary(n):
     
    
    n % 2 + decimal_to_binary()
    
    if n == 1:
         n % 2 + decimal_to_binary()
    print(decimal_to_binary()[::-1])       