
def is_leap_year(year):
    if year % 400 == 0 and year % 100 != 0 or year % 4 == 0:
        return True
    else:
       return False

def days_in_month(month, year):

    # determines how many days there are in a particular month.
    # recieve a month as an integer between 1 and 12
    # recieve  the year as a four digit integer.

    if (month == 11 or month == 4 or
        month == 6 or month == 9):
        return 30
    elif month == 2:
        if is_leap_year(year):  return 29
        else:
            return 28
    else:
        return 31

# read a month and year from the user and displays the number of days in that month. 
def main():

    month = int(input('Insert the number of a month: '))
    if 0 < month < 13:
        year = int(input('Insert the number of the month\'s year: '))
        month_days = days_in_month(month, year)
        print(f'This month has {month_days} days.')
    else:
        print('You entred a wrong month.')
        return

if __name__ == '__main__':
    main()
