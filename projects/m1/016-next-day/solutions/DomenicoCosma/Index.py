
try:

 months_31_days = [1,3,5,7,8,10,12]
 months_30_days = [4,6,9,11]

 year,month,day = input('Enter in numeric form: an year, a month and a day separate by (-). If the number is less then 10 don\'t enter 0 before the number').split('-')

 year = int(year)
 month = int(month)
 day = int(day)
 next_year = year + 1
 next_month = month + 1
 next_day = 1 + day



 if month == 2 and year % 400 % 4 > 0 and day > 28:
    print('In this year February has not more then 28 days')
 elif day > 30 and month in months_30_days:
    print('Your month has no more then 30 days')
 elif day > 31 and month in months_31_days:
    print('Your month has no more then 31 days')



 if day == 31 and month == 12:
    print(f'The day immediately after {str(year).zfill(2)}-{month}-{day} is {str(next_year).zfill(2)}-01-01')
 elif day == 31 and month in months_31_days:
    print(f'The day immediately after {str(year).zfill(2)}-{str(month).zfill(2)}-{day} is {str(year).zfill(2)}-{str(next_month).zfill(2)}-01')
 elif day == 30 and month in months_30_days:
    print(f'The day immediately after {year}-{str(month).zfill(2)}-{day} is {year}-{str(next_month).zfill(2)}-01')
 elif year % 400 % 4 == 0 and month == 2 and day == 29:
    print(f'The day immediately after {str(year).zfill(2)}-{str(month).zfill(2)}-{day} is {year}-03-01')
 elif year % 400 % 4 > 0 and month == 2 and day == 28:
    print(f'The day immediately after {str(year).zfill(2)}-{month}-{day} is {year}-03-01')
 elif day < 31 and month != 2:
    print(f'The day immediately after {str(year).zfill(2)}-{str(month).zfill(2)}-{str(day).zfill(2)} is {year}-{str(month).zfill(2)}-{str(next_day).zfill(2)}')
 else:
    print(f'The day immediately after {str(year).zfill(2)}-{str(month).zfill(2)}-{str(day).zfill(2)} is {year}-{str(month).zfill(2)}-{str(next_day).zfill(2)}')

except:
    print('Something is wrong!! Please follow the request')