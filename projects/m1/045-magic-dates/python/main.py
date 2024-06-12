def magic_date(day,month,year):
    if day * month == year % 100:
        print(("{}/{}/{} is a magic date.") .format(day,month,year))


def main():
    days30 = [4,6,9,11]
    days31 = [1,3,5,7,8,10,12]
    for year in range(1900,2000):
        for month in range(1,13):
            if month in days30:
                for day in range(1,31):
                    magic_date(day,month,year)
            if month in days31:
                for day in range(1,32):
                    magic_date(day,month,year)
            if month == 2:
                if year % 400 == 0 or year % 4 == 0 and year % 100 != 0:
                    for day in range(1,30):
                        magic_date(day,month,year)
                else:
                    for day in range(1,29):
                        magic_date(day,month,year)

            
if __name__ == '__main__':
    main()



    



