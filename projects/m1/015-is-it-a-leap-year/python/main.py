'''
# Is It a Leap Year?

Most years have 365 days.   
However, the time required for the Earth to orbit the Sun is actually slightly more than that.   
As a result, an extra day, February 29, is included in some years to correct for this difference. 
Such years are referred to as leap years.

The rules for determining whether a year is a leap year follow:  
- Any year that is divisible by 400 is a leap year.
- Of the remaining years, any year that is divisible by 100 is not a leap year. 
- Of the remaining years, any year that is divisible by 4 is a leap year.
- All other years are not leap years.  

Write a program that **reads a year** from the user and 
displays a message indicating **whether it is a leap year**.
'''

def check_leap_year(year):
    is_leap = False
    
    if year%400 == 0:
        is_leap = True
    elif year%100 == 0:
        is_leap = False
    elif year%4 == 0:
        is_leap = True
    else:
        is_leap = False

    return is_leap

while True:
    try:
        year_from_user = int(input("\nWhich year do you want to check if leap or not? "))

    except ValueError:
        print("\nInput error, please try again..")
        continue

    if check_leap_year(year_from_user) == True:
        print(f"\n{year_from_user} is a leap year.\n")
        break
    else:
        print(f"\n{year_from_user} is not a leap year.\n")
        break
    
    
print("\nBye! Have a nice day!\n")