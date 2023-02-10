
# Introducing Year - Leap or Not Leap

year = int (input ("Enter a year ---> "))

if (year%400 == 0) or (year%100 != 0 and year%4 == 0):  
    leap_year = True  
else:
    leap_year = False
    
#-------------------------------------------------------------------------

# Introducing: Day, Month and Days per month (as a Dictionary)           

days_per_month ={
1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31
}

month = int(input("Enter a month as an Number - for example: 1 for January; 6 for June; 12 for December ect. - and remember: you don't need more than 12 Numbers - from 1 to 12... ---> "))
day = int(input("Enter a day as a Number from 1 to 31. But remenber that not all the months have 31 Days... ---> "))

#------------------------------------------------------------------------

# The lenght of Febrary is a crucial point between Leap Year and Not Leap Year
# Defining Leap Year and Not Leap Year in order to complete the Dictionary before writing the last part of the code

# It could be done in a more articulted way, without dividing the Code in so many If-Island

#-------------------------------------------------------------------------

# For the Dicitionary "2" is the Key representing February - a real "key point"

if leap_year == True:
    
    days_per_month[2] = 29
else:
    days_per_month[2] = 28
        
#-------------------------------------------------------------------------        

# Now we have only to solve the transition from
# a day to another - a month to another - a year to another

# Pay attention on the Scope of the new Variables

new_day = day
new_month = month
new_year = year

if day < int(days_per_month[month]):
    new_day = day + 1
else:
    new_day = 1
    if month == 12:
        new_month = 1
        new_year = year + 1
    else:
        new_month = month + 1

print(f"{year}-{month}-{day} next DATE: {new_year}-{new_month}-{new_day}")

