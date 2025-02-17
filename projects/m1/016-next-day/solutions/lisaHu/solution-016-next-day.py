date = input('Welcome! Enter the date in this yyyy-mm-dd format:  ')

year = int(date[0:4])
month = int(date[5:7])
day = int(date[8:10])

month31 = [1, 3, 5, 7, 8, 10, 12]
month30 = [4, 6, 9, 11]

if 1 <= day <= 27:
    print(str(year) + '-' + "%02d" %month + '-' + "%02d" %(day + 1))
elif month == 2:
    if day == 28:
        if year % 4 == 0  or  year % 400 == 0  and  year % 100 != 0:
            print(str(year) + '-' + "%02d" %month + '-' + "%02d" %(day + 1))
        else:
            print(str(year) + '-' + "%02d" %(month + 1) + '-01')
    elif day == 29:
        if year % 100 != 0:
            print('Error: the year entered is not a leap year')
        else:
            print(str(year) + '-' + "%02d" %(month + 1) + '-01')
elif day == 28 or day == 29 or day == 30 and month in month31:
    print(str(year) + '-' + "%02d" %(month) + '-' + "%02d" %(day + 1))
elif day == 31 and month in month31:
    if month == 12:
        print(str(year + 1) + '-01-01')
    else:
        print(str(year) + '-' + "%02d" %(month + 1) + '-01')
elif day == 28 or day == 29 and month in month30:
    print(str(year) + '-' + "%02d" %(month) + '-' + "%02d" %(day + 1))
elif day == 30 and month in month30:
    print(str(year) + '-' + "%02d" %(month + 1) + '-01')
else:
    print('Not a valid date. Please refresh and enter a valid')