
#Function that reads two parameters (month and year) and return the days of that month


def days(month, year):
    if month > 12 or month < 1:
        print('The months are 12')
    elif year < 1000 or year > 9999:
        print('Enter only a year as a four digit integer')
    else:
        if month >= 1 and month <= 7 and month % 2 == 1 or month >= 8 and month <= 12 and month % 2 == 0:
           print('In this month there are 31 days')
        elif month == 2 and year % 400 % 4 == 0:                                               #Formula to calculate if it is a leap year
           print('In this month there are 29 days')
        elif month == 2 and year % 400 % 4 != 0:
           print('In this month there are 28 days')
        else:
           print('In this month there are 30 days')




days(int(input('Enter a month as an integer  between 1 and 12...')),int(input('Enter a year as a four digit integer')))