# Ask the user for three input
year = int(input('Insert the year: '))
month = int(input('Insert the month: '))
day = int(input('Insert the day: '))

# Define months lists and new year, month, day variables
month_30 = [4, 6, 9, 11]
month_31 = [1, 3, 5, 7, 8, 10]
december = 12
february = 2
new_year = year
new_month = month
new_day = day

def change_day(day):
    new_day = day + 1
    return new_day

# Create a function to change month (and year in case of December)
def change_month(month, year):
    if month == 12:
        new_day = 1
        new_month = 1
        new_year = year + 1

    else:    
        new_day = 1
        new_month = month + 1
        new_year = year
    
    return new_day, new_month, new_year
    

def my_fun(new_year, new_month, new_day):
    # Define the possibilties with February and leap years with appropriate
    # error message
    if month == february:
        if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
            if day == 29:
                new_day, new_month, new_year = change_month(month, year)
            elif day <= 28:
                new_day = change_day(day)
        elif day == 28:
            new_day, new_month, new_year = change_month(month, year)
        else:
            if day > 28:
                print('ERROR! this is not a leap year')
            elif day <= 0:
                print('ERROR! maybe this date does not exist')
            return   
    
    # Define the possibilties with 30-day months with appropriate error message 
    elif month in month_30:
        if day == 30:
            new_day, new_month, new_year = change_month(month, year)
        elif day <=0 or day > 30:
            print('ERROR! maybe this date does not exist')
            return
        else:
            new_day = change_day(day)

    # Define the possibilties with 31-day months with appropriate error message
    elif month in month_31:       
        if day == 31:
            new_day, new_month, new_year = change_month(month, year)
        elif day <=0 or day > 31:
            print('ERROR! maybe this date does not exist')
            return
        else:
            new_day = change_day(day)

    # Define the possibilties with December and new year 
    # with appropriate error message
    elif month == december:
        if day == 31:
            new_day, new_month, new_year = change_month(month, year)            
            print('HAPPY NEW YEAR!!!')
        elif day <=0 or day > 31:
            print('ERROR! maybe this date does not exist') 
            return 
    else:
        print('ERROR! maybe this date does not exist')   
        return     

    # Format the output of days and months
    format_day = '{:02d}'.format(new_day)
    format_month = '{:02d}'.format(new_month)

    # Display the output
    print('Tomorrow will be ' + str(new_year) + '-' + str(format_month) + '-' + str(format_day))

my_fun(year, month, day)