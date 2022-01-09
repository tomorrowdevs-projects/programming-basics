def getLeapYear(anno):
    if (anno % 400 == 0) or (anno % 4 == 0 and (not(anno % 100 == 0))):
        return('leap year ')
    else:
        return('not leap year ')


for year in range(2016,2024):
    print(str(year) + ' is ' + getLeapYear(year))


