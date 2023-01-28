

bits_8 = input("Enter 8 bits - blank to quit---> ") # bits_8 is considered as a string

while(bits_8 != 0):
    
    if bits_8.count("1") + bits_8.count("0") != 8 or len(bits_8) != 8: # control
    
        print("Alert - error in sending the 8 bits")
    
    else:
        
        break
  
  
one = bits_8.count("1")
        
           
if one % 2 == 0:
                
    print("Parity Bit: 0")
            
else:
                
    print("Parity Bit: 1")

