def leap (year):
    if year % 400 == 0 and year % 100 != 0 or year % 4 == 0:
        return True
    else:
        return False

def ordinal_date(day, month, year):

    ordinal_date = 0
    while month > 0:
        if month == 1:
            ordinal_date += day
        elif month == 2:
            ordinal_date += 31
        elif month == 3:
            ordinal_date += 29 if leap(year) else 28
        elif month == 4: 
            ordinal_date += 31
        elif month == 5:
            ordinal_date += 30
        elif month == 6:
            ordinal_date += 31
        elif month == 7:
            ordinal_date += 30
        elif month == 8:
            ordinal_date += 31
        elif month == 9:
            ordinal_date += 30
        elif month == 10:
            ordinal_date += 30
        elif month == 11:
            ordinal_date += 31
        elif month == 12:
            ordinal_date += 31 
        month -= 1 
        
    print("The ordinal day is", ordinal_date)

def main():
    year = int(input("Select the year: "))
    month = int(input("Select the month: "))
    day = int(input("Select the day: "))
    ordinal_date(day, month, year)
    
    

if __name__ == "__main__":
    main()
