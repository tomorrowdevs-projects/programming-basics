
import math

year=int(input("insert a year:  "))

def calcDay(year):
  dayOfTheWeek=0
  day=(year+math.floor((year-1)/4)-math.floor((year-1)/100)+math.floor((year-1)/400))%7
  if(day==0):
    dayOfTheWeek="Sunday"
  elif(day==1):
    dayOfTheWeek="Monday"
  elif(day==2):
    dayOfTheWeek="Tuesday"
  elif(day==3):
    dayOfTheWeek="Wednesday"
  elif(day==4):
    dayOfTheWeek="Thursday"
  elif(day==5):
    dayOfTheWeek="Friday"
  else:
    dayOfTheWeek="Saturday"
  return dayOfTheWeek

print(calcDay(year))