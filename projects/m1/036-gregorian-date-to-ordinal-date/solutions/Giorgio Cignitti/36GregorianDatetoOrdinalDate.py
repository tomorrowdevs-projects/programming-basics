#An ordinal date consists of a year and a day within it, both of which are integers. The year can be any year in the Gregorian calendar while the day within the year ranges from one, which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31. Ordinal dates are convenient when computing differences between dates that are a specific number of days (rather than months. For example, ordinal dates can be used to easily determine whether a customer is within a 90 day return period, the sell-by date for a food-product based on its production date, and the due date for a baby.Write a function named ordinalDate that takes three integers as parameters. These parameters will be a day, month and year respectively. The function should return the day within the year for that date as its only result. Create a main program that reads a day, month and year from the user and displays the day within the year for that date. Your main program should only run when your file has not been imported into another program.

inputYear=int(input("please insert a number for a year (i.e. 2020): "))
inputMonth=(input("please insert a month (ie February)"))
inputDay=int(input("please insert a number for a day (ie 16): "))

#global variable for Leapyear. It is used in ordinal date to check if one yeear is Leap or not thanks to calcLeapYear
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

#this function takes 3 input year, month and day. year is used by calcLeapYear to define if the result is "yes" for leap or "no" for not leap. Based on it after february it is added 1 to the final count. I defined very brutally the day by hardcoding. i.e. 20 Aprile 2020. 31(January)+28/29(February)+day inserted by the user

def ordinalDate(year,month,day):

  calcLeapYear(year) 
  output=0 
  if(month=="January"):
    output=day
  elif(month=="February"):
    output=day+31

  elif(month=="March"):
    if(leapYear=="yes"):
     output=day+60
    else:
     output=day+59

  elif(month=="April"): 
    if(leapYear=="yes"):
     output=day+91
    else:
     output=day+90

  elif(month=="May"):
    if(leapYear=="yes"):
     output=day+121
    else:
     output=day+120

  elif(month=="June"):
    if(leapYear=="yes"):
     output=day+152
    else:
     output=day+151

  elif(month=="July"):
    if(leapYear=="yes"):
     output=day+182
    else:
     output=day+181

  elif(month=="August"):
    if(leapYear=="yes"):
     output=day+213
    else:
     output=day+212

  elif(month=="September"):
    if(leapYear=="yes"):
     output=day+244
    else:
     output=day+243

  elif(month=="October"):
    if(leapYear=="yes"):
     output=day+274
    else:
     output=day+273

  elif(month=="November"):
    if(leapYear=="yes"):
     output=day+305
    else:
     output=day+304

  elif(month=="December"):
    if(leapYear=="yes"):
     output=day+335
    else:
     output=day+334

  return output

if  __name__   == "__odrinalDate__":
 print(ordinalDate(inputYear,inputMonth,inputDay))











  
