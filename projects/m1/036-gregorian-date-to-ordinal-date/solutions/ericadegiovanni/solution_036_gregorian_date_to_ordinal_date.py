
def is_leap_year(year):
    
    #return if it is or not a leap year
    
    if year % 400 == 0 and year % 100 != 0 or year % 4 == 0:
        return True
    else:
       return False

def ordinal_date(day, month, year):

    # The parameters will be a day, month and year respectively. 
    # return the day within the year for that date as its only result.

    ordinal_date = 0
    while month > 0:
        if month == 1 : 
            ordinal_date += day  
        elif month == 2: 
            ordinal_date += 31 
        elif month == 3:
            ordinal_date += 29 if is_leap_year(year) else 28 
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
            ordinal_date += 31 
        elif month == 10:
            ordinal_date += 30 
        elif month == 11:
            ordinal_date += 31 
        elif month == 12:
            ordinal_date += 30 
        month -= 1
       
    print(ordinal_date,f"{'day' if ordinal_date == 1 else 'days'} of the year.") 

def main():
    day = int(input('Insert the number of a day: '))
    month = int(input('Insert the number of a month: '))
    year = int(input('Insert a year: '))
    ordinal_date(day, month, year)

if __name__ == "__main__":
    main()
