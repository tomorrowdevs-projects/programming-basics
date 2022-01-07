
for index in range(1,101):
    
    if index%3==0 and index%5==0:
       print ("FIZZ BUZZ")
    elif index%5==0:
        print ("BUZZ")
    elif index%3==0:
        print ("FIZZ")
    else:
        print ("{}" .format(index))