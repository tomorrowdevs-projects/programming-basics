while True:
    bits = input("please insert an group of 8 bits ")

    if bits.count("1") > 8:
        print ("Error! you must typpe only 8 bits!")
        break
    
    if bits.count("1") % 2 == 0:
        print("Your bit parity should be 0")
    else:
        print("Your bit parity should be 1")
    
    if bits == " ":
        break



        