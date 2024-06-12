def ordinalDate(day,month,year):
    
    days_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if year % 400 == 0 or year % 4 == 0 and year % 100 != 0:
        days_month[1] = 29

    day_in_ordinal = sum(days_month[:month-1]) + day
    
    return(day_in_ordinal)


def main():
    print("Insert a valid date if you want to convert it correctly.")
    user_day = int(input("Insert the day (from 1 to 31): "))
    user_month = int(input("Insert the month (from 1 to 12): "))
    user_year = int(input("Insert the year: "))

    converted_date = ordinalDate(user_day,user_month,user_year)
    print(("{}/{}/{} is day {} of {}") .format(user_day,user_month,user_year,converted_date,user_year))

if __name__ == "__main__":
    main()