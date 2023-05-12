
seconds = int(input("Enter number of seconds: "))

def calcSec(sec):
 
 dd = sec // 86400
 reminderD = sec % 86400
 hh = reminderD // 3600
 reminderHH = reminderD% 3600
 mm = reminderHH // 60
 ss = reminderHH % 60

 return "The duration is: ""%d:%02d:%02d:%02d"%(dd,hh,mm,ss),
  


print(calcSec(seconds))

