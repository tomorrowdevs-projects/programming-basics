# ask to user a year, a month and a day as numbers
year = int(input('insert a year: '))
month = int(input('insert a month: '))
day = int(input('insert a day: '))
if year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
    leap_year = True
else:
    leap_year = False

# use a for cycle that runs one time to add a day to date typed by user and print result on screen
for i in range(0,1):
    if month > 12 or month < 1:
        print('error')
        quit()
    elif day > 31:
        print('error')
        quit()
    elif leap_year == False and month == 2 and day > 28:
        print ('error')
        quit()
    elif leap_year == True and month == 2 and day > 29:
        print('error')
        quit()
    elif (month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10) and day == 31:
        month += 1 
        day = 1
    elif (month == 4 and month == 6 and month == 9 and month == 11) and day == 30:
        month +=1
        day = 1
    elif month == 12 and day == 31:
        year += 1
        month = 1
        day = 1
    elif leap_year == True and month == 2 and day == 29:
        month += 1
        day = 1
    elif leap_year == False and month == 2 and day == 28:
        month += 1
        day = 1
    else:
        day += 1


print(f'{str(year).zfill(2)}-{str(month).zfill(2)}-{str(day).zfill(2)}')

