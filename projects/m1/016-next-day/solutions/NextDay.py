year=int(input("years: "))
month=int(input("month (in number i.e. 2 for February): "))
day=int(input("day (i.e. 2): "))

def calcNext(years,month,day):

  if(years % 4 != 0):
    leapYear="no"
  else:
    if(years % 100 != 0):
      leapYear="yes"
    else:
      if(years % 400 != 0):
        leapYear="no"
      else:
        leapYear="yes"

  if(month==12 and day==31):
    years+=1;
    month=1
    day=1
   
  elif (day==30 and month==11 or month == 6 or month==9):
    month+=1;
    day=1

  elif(leapYear=="yes" and month==2 and day==28):
    month=2;
    day=29

  elif(leapYear=="yes" and month==2 and day==29):
   month+=1;
   day=1

  elif(leapYear=="no" and month==2 and day==28):
   month+=1;
   day=1

  else:
    month=month
    day=day+1

  return years,month,day

print(calcNext(year, month,day))