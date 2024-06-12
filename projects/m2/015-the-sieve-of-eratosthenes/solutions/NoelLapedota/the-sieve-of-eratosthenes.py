def The_Sieve(q):
    array = []
    for i in range(2,q+1):
        if q % i == 0:
         array.append(i)
        else:
            i = 0 
            array.append(i)
    print(array)



