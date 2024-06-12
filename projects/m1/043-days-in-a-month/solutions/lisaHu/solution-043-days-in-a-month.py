def x(month, year):
    #gather days for each month in a list and select the result(days) using the month input as index
    days_of_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = days_of_months[month-1]
    #check if it's a leap year and add a day eventually
    if month == 2 and year % 4 == 0 or year % 400 == 0 and year % 100 != 0:
        days += 1
    return days

#get input from user, check if the format is correct and print return of function or print error message
if __name__=='__main__':
    month = int(input('Enter month in format MM: '))
    year = int(input('Enter year in format YYYY: '))
    if 1 <= month <= 12 and len(str(year)) == 4:
        print('There are '  + str(x(month, year)) + ' days in month ' + str(f"{month:02d}") + ' of year ' + str(year))
    else:
        print('Error: the input is not in correct format')