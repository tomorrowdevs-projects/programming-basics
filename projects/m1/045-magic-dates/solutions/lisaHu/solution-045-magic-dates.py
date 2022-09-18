day = 1
month = 1
year = 1900
while True:
        if year == 2000:
            break
        if day * month == int(str(year)[2:]):
            print(day + '-' + month + '-' + year)
        else:
            if day == 31:
                if month == 1 or 3 or 5 or 7 or 8 or 10:
                    day = 1
                    month += 1
                    print('new month')
                elif month == 12:
                    day = 1
                    month = 1
                    year += 1
                    print('LAST')
                    break
            elif day == 30 and month == 4 or 6 or 9 or 11:
                day = 1
                month += 1
                print('31 days now')
            elif day == 28 and month == 2:
                day = 1
                month += 1
                print('march')
            else:
                day += 1
                print(day, month)
                print(False)