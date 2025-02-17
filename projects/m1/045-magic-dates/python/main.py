from days_N_month import how_much_days_month

def is_magic_date(date):
    splitted_date = date.split(',')

    month_day = splitted_date[0]
    splitted_month = month_day.split(' ')

    yyyy = splitted_date[1]
    yy = int(yyyy[3:5])


    month_name = splitted_month[0].lower()
    mm = int(month_name)   

    dd = int(splitted_month[1])
    mmdd = mm * dd

    if mmdd == yy:
        print(f'{date} is a magical date')

def days_in_a_month(month, year):
    months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    months_days = months_days[month - 1]

    how_much_days_month(month, year)
            
    return months_days

def date_20th():
    
    day = 31
    month = 12
    year = 1900
    date_list = []
    
    while year != 2001:

        if day < days_in_a_month(month, year):
            day += 1
        else:
            month += 1
            day = 1
            
        if month > 12:
            year += 1
            month = 1

        # to avoid 1.1.2001 in the list
        if year != 2001:
            date = (f'{month} {day}, {year}')
            date_list.append(date)

    return(date_list)

if __name__ == '__main__':
    for date in date_20th():
        is_magic_date(date)