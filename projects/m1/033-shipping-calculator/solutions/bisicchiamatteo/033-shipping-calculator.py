def shipping():
    first= 10.99

    total = first + ((float(unity)-1)*2.99)
    print ("the number of "+ str(unity)+" cost : "+ str (total))

unity=input("insert the value of articles :")
shipping()
