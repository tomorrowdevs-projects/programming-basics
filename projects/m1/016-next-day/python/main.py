print('Hello user enter a date and i evaluete the next')

day = int(input('Enter a day: '))
month = int(input('Enter a month: '))
year = int(input('Enter a year: '))

# Computes the 31/12 case
if month == 12:
    if day == 31:
        day = 1
        month = 1
        year += 1
    else:
        day += 1

# Compute the 31 days months
if (month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12):
    if day == 31:
        day = 1
        month += 1
    else:
        day += 1

#compute the 30 days months
if (month == 4 or month == 6 or month == 9 or month == 11):
    if day == 30:
        day = 1
        month += 1
    else:
        day += 1

if month == 2:
    if day == 29:
        day = 1
        month += 1
    elif day == 28:
        if year % 400 == 0:
            day += 1
        elif year % 100 == 0:
            day = 1
            month += 1
        elif year % 4 == 0:
            day += 1

                

print(f'your next day is {day}/{month}/{year}')