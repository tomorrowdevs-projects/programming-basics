inputYears=int((input("insert a year: ")))

def calcLeapYear(year):
  if(year % 4 != 0):
    leapYear="no"
  else:
    if(year % 100 != 0):
      leapYear="yes"
    else:
      if(year % 400 != 0):
        leapYear="no"
      else:
        leapYear="yes"

  return leapYear

print(calcLeapYear(inputYears))