def base2ten():
    global new_number
    base_select= input ("which base is your number. insert the number of base  (2,8,16) : ")
    if base_select=="2":
        new_number = int (number_to_convert,2)
    elif base_select=="8":
        new_number = int (number_to_convert,8)
    elif base_select=="16":
        new_number = int (number_to_convert,16)
    else:
        print ("error")

def ten2base():
    global new_number
    base_select= input (" insert the number of base  (2,8,16) : ")
    if base_select=="2":
        new_number = bin (int(number_to_convert))
    elif base_select=="8":
        new_number = oct (int(number_to_convert))
    elif base_select=="16":
        new_number = int (int(number_to_convert))
    else:
        print ("error")

def main():
    while True:
        global number_to_convert 
        number_to_convert=input("insert the value to convert into another base :")
        if number_to_convert=="":
            break
        value= input ("select the type of conversion (a: first base b: second base) \ h or H for a==>base10 |i or I for base10==>a")
        
        if value=="H"or value=="h": 
            
            base2ten()
        elif value=="I"or value=="i" :
            
            ten2base()

        print (" the value of converted number is : " +str(new_number))
        