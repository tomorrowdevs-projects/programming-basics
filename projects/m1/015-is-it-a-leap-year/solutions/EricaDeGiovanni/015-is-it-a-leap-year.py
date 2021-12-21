# • Any year that is divisible by 400 is a leap year. 
# • Of the remaining years, any year that is divisible by 100 is not a leap year. 
# • Of the remaining years, any year that is divisible by 4 is a leap year. 
# • All other years are not leap years.

year_user = int(input('Insert a year: '))

if year_user % 400 == 0 and year_user % 100 != 0 or year_user % 4 == 0:
    print(f'{year_user} is a leap year.')
else:
    print(f'{year_user} is not a leap year.')
    


        

