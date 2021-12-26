def monthday(month,year):
    long_month = ['1','3','5','7','8','10','12']
    medium_month = ['4','6','9','11']
    if month in long_month:
        return 31
    elif month in medium_month:
        return 30
    elif int(month) == 2:
        if year % 400 == 0 or year % 400 != 0 and year %100 != 0 and year % 4 == 0:
            return 29
        else:
            return 28
    else:
        return 0

def main():
    year = int(input('please insert the year: '))
    mese = input('please insert the number of the month: ')
    print(f"This month have {monthday(mese,year)} days")

if __name__ == '__main__':
    main()