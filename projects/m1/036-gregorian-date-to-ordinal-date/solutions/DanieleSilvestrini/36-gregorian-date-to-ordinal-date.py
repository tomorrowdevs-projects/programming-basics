# defines a function that accepts three parameter(year,month and day) so returns the gregorian date into ordinal date
def ordinal_date(year, month, day):
# checks if is it or not a leap year 
    months = list(range(1, 13))
    if year % 400 == 0 and year % 100 == 0 and year % 4 == 0:
        leap = True
    else:
        leap = False
# makes an empty list and a variable for next step
    date_months = []
    total = 0
# first checks if month entered by user is not over 12
    if month in months:
# declares a variable "date_month" were store number of months to calculate 
        date_months = months[0:months.index(month)]
# iterates  the variable and for each month in "date_months" add to "total" the appropriate number of days, then finally return "total" as result
        for d in date_months:
            if 1 <= d <= 7 and d % 2 != 0:
                total += 31
            elif 8 <= d <= 12 and d % 2 == 0:
                total += 31
            elif d == 2 and leap == False:
                total += 28
            elif d == 2 and leap == True:
                total += 29
            else:
                total +=30
    total += day
    return total

# defines a main function to display the date entered by user as ordinal date
def main():
# asks user the day and checks if it is over 31 and then display an error message and use recursion
    day = int(input('insert day: '))
    if day > 31:
        print('There\'s something wrong!')
        main()
# asks user the month and checks if month is over 12, or user entered an invalid number of days(more than 30 or 31),then display an error message and use recursion
    month = int(input('insert month: '))
    if month > 12 or day == 31 and not (1 <= month <= 7 and month % 2 != 0) and not (8 <= month <= 12 and month % 2 == 0) or month == 2 and day > 29:
        print('There\'s something wrong!')
        main()
# asks to user the year and checks if is it a leap year and user puts a valid number for "days" if is it february:
    year = int(input('insert year: '))
    if (year % 400 == 0 and year % 100 == 0 and year % 4 == 0) == True and month == 2 and day > 28:
        print('There\'s something wrong')
        main()
# printing an appropriate message
    print(f'The ordinal date is: {year} - {ordinal_date(year, month, day)}')

# assign to __name__ value of 'name' so the program could run only if is not imported in another file 
if __name__ == '__main__':
    main()