def ordinalDate(day, month, year):
    #create list with how many days there are for each month
    #create variable that has as value the months in the written range
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    month_to_day = months[0: month-1]

    #sum days of the months selected + add the rest of the days
    sum_months = sum(month_to_day)
    sum_days = sum_months + day

    #check if it's a leap year and if it's past February. If both statements are true, a day is added to the count
    if month >= 3 and year % 4 == 0 or year % 400 == 0 and year % 100 != 0:
        sum_days += 1

    #add results to a list + add function that will always display the days with 3 digits (eg 002 or 126)
    ordinal_date = [year, "{:03d}".format(sum_days)]

    #basic check if the date format is incorrect - in that case, an error message will be printed
    #if the date format is correct, the return statement will print the list with results
    if month > 12 or day > 31:
        print('Incorrect date format')
    else:
        return print(*ordinal_date, sep='-') 

#get input from user and call function
day = int(input('Enter day: '))
month = int(input('Enter month: '))
year = int(input('Enter year: '))
ordinalDate(day, month, year)