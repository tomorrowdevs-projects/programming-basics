
# defines a function that takes a year of 4 digits and a month as an integer between 1 and 12 and return how many days is long 
def days_in_a_month(year, month):

# checks the lenght of "year" and that month is between 1 and 12 
    if year < 1000 or year > 9999:
        return 'Error'
    if month < 1 or month > 12:
        return 'Error'

# creates two lists to checks if the month insert by user is long 30 or 31 days
    month_30 = [4, 7, 9, 11]
    month_31 = [1, 3, 5, 6, 8, 10, 12]
# checks if the year is a leap year or not
    if year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
        leap_year = True   
    else:
        leap_year = False
# return how many days there are in the month inserted by user,checking if it is a leap year and so february has 29 day, and if month is 30 or 31 days longer
    if leap_year == True and month == 2 :
        return 29
    elif leap_year == False and month == 2:
        return 28
    elif month in month_30:
        return 30
    elif month in month_31:
        return 31
# defines a main function that asks to user year and month, then passes these values and prints the result
def main():
    year = int(input('insert year: '))
    month = int(input('insert month: '))
    print(days_in_a_month(year,month))

main()