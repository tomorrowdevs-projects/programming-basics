
print("insert a duration")
days=int(input("day "))
hours=int(input("hours "))
mins=int(input("mins "))
secs=int(input("secs "))

def calcSec(dd,hh,mm,ss):
  if(hh > 60 or hh < 0): return "invalid hours"
  elif (mm > 60 or mm < 0): return "invalid mins";
  elif (ss > 60 or mm < 0): return "invalid secs";
  elif (dd > 360 or dd < 0): return "invalid day";
  ddtoss = dd * 86400;
  hhtoss = hh * 3600;
  mmtoss = mm * 60;
  return f"your duration in secs is {ddtoss+hhtoss+mmtoss+ss}";

print(calcSec(days,hours,mins,secs))
