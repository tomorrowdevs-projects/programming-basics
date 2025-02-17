print ("Insert a year to determinate if is leap or not!")
print ("Insert a year:")
year = int(input())

if year % 400 == 0:
    print (f"{year} is a leap year!")
    
elif year % 100 == 0:
    print (f"{year} isn't a leap year!")
    
elif year % 4 == 0:
    print (f"{year} is a leap year!")
    
else:
    print (f"{year} isn't a leap year!")