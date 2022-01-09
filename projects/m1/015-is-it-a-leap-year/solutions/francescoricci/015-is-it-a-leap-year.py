# exercise 015 by Francesco Ricci
def getLeapYear(year):
    return "leap year" if (year % 400 == 0) or (year % 4 == 0 and (not(year % 100 == 0))) else "not leap year"

for year in range(2014,2028):
    print(str(year) + ' is ' + getLeapYear(year))


