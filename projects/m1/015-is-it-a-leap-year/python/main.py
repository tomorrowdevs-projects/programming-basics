
year = int(input("Insert a year and I'll tell you if it's a leap year or not: "))

if year % 400 == 0:
   print(f"This is a leap year")
elif year % 100 == 0:
    print(f"This is not a leap year")
else: 
    print(f"This is a leap year")