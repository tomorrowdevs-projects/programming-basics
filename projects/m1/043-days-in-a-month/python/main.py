def is_leap_year(days_in_month, year):
    if month == 2:
        if year % 400 == 0:
            days_in_month += 1
        elif year % 100 == 0:
            pass
        elif year % 4 == 0:
            days_in_month += 1

def days_in_a_month(month, year):
    months_days =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days_in_month = months_days[month - 1]
    
    is_leap_year(days_in_month, year)
        
    return days_in_month

if __name__ == '__main__':

    print('Hello user enter a month and a year (in number)')
    month = int(input('Enter a month: '))
    year = int(input('Enter a year: '))

    print(days_in_a_month(month, year))