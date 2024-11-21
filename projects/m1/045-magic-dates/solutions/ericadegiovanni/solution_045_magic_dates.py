

def is_magic_date(gg, mm, yyyy):

    # function that determines whether or not a date is a magic date.
    # is magic date if day * month == last two digit of the year. 

    year = yyyy
    yyyy = int(str(yyyy)[-2:])
    if gg * mm == yyyy:
        print(f'{gg:02d}/{mm:02d}/{year} is a magic date.')
        return True

# verify if is a leap year
def is_leap_year(yyyy):
    if yyyy % 400 == 0 and yyyy % 100 != 0 or yyyy % 4 == 0:
        return True
    else:
       return False  


def days_in_month(month, year):

    if (month == 11 or month == 4 or
        month == 6 or month == 9):
        return 30
    elif month == 2:
        if is_leap_year(year):  return 29
        else:
            return 28
    else:
        return 31

# main program that finds and displays all of the magic dates in the 20th century  (from 1901 to 2000)
def main():

    #years
    for y in range(1901, 2001): 
        #months
        for m in range(1,13):
            #days           
            for d in range(1, days_in_month(m, y) + 1 ):
                is_magic_date(d, m, y)



if __name__ == '__main__':
    main()

