#Write a function that determines how many days there are in a particular month. Your function will take two parameters: The month as an integer between 1 and 12, and the year as a four digit integer. Ensure that your function reports the correct number of days in February for leap years. Include a main program that reads a month and year from the user and displays the number of days in that month.

leapYear=""
def calcLeapYear(year):
  global leapYear
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

def calcDay(month,year):
  day=0
  calcLeapYear(year) 
  if(month==11 or month==6 or month==4 or month==9):
    day=30
  elif(month==2):
     if(leapYear=="yes"):
       day=29
     else:
       day=28
  else:
    day=31
  return day

def main():
  while True:
    try:
     inputMonth=int(input("pleas insert a month (the month should be insert as a number ie 3 for March): "))
     inputYear=int(input("pleas insert a year (the year should have 4 characters is 1991): "))
     print(calcDay(inputMonth,inputYear))
     break
    except ValueError:
     print("Oops!  That was no valid number.  Try again...")


main()