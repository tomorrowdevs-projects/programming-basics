#read a date from the user 

# calc number of days
month_user = 3

days_30 = [11, 4, 6, 9]
days_31 = [1, 3, 5, 7, 8, 10, 12]

#display the number of days in that month.
if month_user in days_30:
    print('30 days.')
#Display “28 or 29 days” for February
elif month_user == 2:
    print('28 or 29 days.')
else:
    print('31 days.')

#is a leap year
