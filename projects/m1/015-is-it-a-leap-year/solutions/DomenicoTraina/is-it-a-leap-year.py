user_year= int(input("Enter year to check: "))

if user_year%400 == 0 :        
    print("{} is a leap year".format(user_year)) 
    
elif user_year%100 != 0 and user_year%4==0 :
    print("{} is a leap year".format(user_year))
else:    
    print("{} is NOT a leap year".format(user_year))
        
  