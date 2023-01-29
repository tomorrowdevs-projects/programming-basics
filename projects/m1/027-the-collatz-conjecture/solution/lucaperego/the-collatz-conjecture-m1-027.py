

n = int(input("Insert any positive integer Number: "))

    
while n != 1:
    
    print ("**DO**")
    
    if n % 2 == 0:
        n = (n/2)
    else:
        n = ((n*3)+1)
        
        if n == 1:
            break

print(n)
            
    
   
