def int2hex():
    try:
        result=hex(int(new_number))
        print (result)
    except :
        print ("error")

def hex2int():
    try:
       result=(int(new_number,16))
       print (result)
    except :
        print ("error")

def main():
        while True:
            number=input("convert the nunber in hexadecimal(H) or integer(I) . Insert the value :") 
            if number=="":
                break
    
            value=number[0]
            global new_number
            new_number = number[1:]
    
            if value=="H"or value=="h": 
                int2hex()
            
            elif value=="I"or value=="i" :

                hex2int()
            else:
                print ("error")

if __name__ == "__main__":
    main()