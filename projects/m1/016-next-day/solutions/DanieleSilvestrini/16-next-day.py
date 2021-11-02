year, month, day = input("Insert date as year, month and day separated by a whitespace: ").split()

year_int = int(year)
month_int = int(month)
day_int = int(day)

months_31 = [1, 3, 5, 7, 8, 10, 12]
months_30 = [2, 4, 6, 9, 11]

if day_int > 31 or month_int == months_30[0] and day_int > 29 or month_int in months_30 and day_int > 30 or month_int > 12:
    print('Invalid date')
elif month_int in months_31[0:5] and day_int == 31 or month_int in months_30 and day_int == 30 or month_int == months_30[0] and day_int == 28 :
    new_day = 1
    print(f"{year_int} / " + f"{month_int + 1} / " + f"{new_day}")
elif month_int == months_31[6] and day_int == 31:
    new_day = 1
    new_month = 1
    print(f'{year_int + 1} / ' + f'{new_month} / ' + f'{new_day}')
else:
    print(f'{year_int} / ' + f'{month_int} / ' + f'{day_int + 1}')
    