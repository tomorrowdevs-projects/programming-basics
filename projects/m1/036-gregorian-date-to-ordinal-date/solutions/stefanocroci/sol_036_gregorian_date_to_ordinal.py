def leap_year(year):
    # This function return True if year is a leap year
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        return True

def number_day_in_a_month(month, year):
    # This function return the number of day in a month
    month_30 = [4, 6, 9, 11]
    month_31 = [1, 3, 5, 7, 8, 10, 12]
    if month in month_31:
        day = 31
    elif month in month_30:
        day = 30
    elif leap_year(year):
        day = 29
    else:
        day = 28

    return day

def gregorian_date(year, month, day):
    # This function return the ordinal day working in a loop that goes from 1 to the previous month 
    # compared to the one indicated as parameter. Then add up the remaining days
    day_sum = 0
    for i in range(1, month):
        day_sum += number_day_in_a_month(i, year)

    return day_sum + day

def main():
    year = int(input('Insert an Year: '))
    month = int(input('Insert a Month: '))
    day = int(input('Insert a day: '))

    if leap_year(year) != True and month == 2 and day == 29:
        print('ERROR! this is not a Leap year')
        return main()


    print('The ordinal day of your date is ' + str(gregorian_date(year, month, day)))

main()

