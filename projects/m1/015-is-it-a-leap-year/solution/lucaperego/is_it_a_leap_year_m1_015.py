
print("Find if a year is Leap or Not")

year = int (input ("Enter year ---> "))


 
if (year%400 == 0) or (year%100 != 0 and year%4 == 0):
        
    
    print(f"{year}: Leap Year.")
              
            
else :
    
    
    print(f"{year}: NOT a Leap Year.")

