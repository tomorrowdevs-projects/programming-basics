numbers=1
for i in range (100):
    if ((numbers %3)==0):
        if((numbers %5)==0):
            print("fizz and buzz")
        else:
            print("fizz")
    elif((numbers %5)==0):
        print("buzz")
    
    else:
        print (str(numbers))
    numbers+=1