# exercise 015 by Francesco Ricci
def getLeapYear(anno):
    return "leap year" if (anno % 400 == 0) or (anno % 4 == 0 and (not(anno % 100 == 0))) else "not leap year"

for year in range(2016,2024):
    print(str(year) + ' is ' + getLeapYear(year))


