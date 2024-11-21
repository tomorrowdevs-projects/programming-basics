
def main():
    def ordinalDate(day, month, year):
        if day > 31 or day < 1 or month > 12 or month < 1:
            return 'error'
        else:
            monthsday = [31,28,31,30,31,30,31,31,30,31,30,31]
            passed_month = sum(monthsday[0:month-1])
            if month > 2:
                if year % 400 == 0 or year % 400 != 0 and year %100 != 0 and year % 4 == 0:
                    day += 1
            ordinal = passed_month + day
            return ordinal
    selected_day= int(input('Enter the day: '))
    selected_month = int(input('Enter the month in number: '))
    selected_year = int(input('Enter the year: '))
    print("This is the: " + str(ordinalDate(selected_day, selected_month, selected_year)) + " day of the year" )

if __name__ == '__main__':
    main()