minutes=int(input("Number of minutes: "))
messages=int(input("Number of messages: "))

def calcBill(mins,mexs):
  
  if(mins<=50 and mexs<=50):
    totMinsMexs=15+0.44;
    reminingMins=0
    reminingMexs=0
  elif(mins>50 or mexs<50):
    reminingMins=((mins%50)*0.25);
    reminingMexs=((mexs%50)*0.15);
    totMinsMexs=15+reminingMexs+reminingMins+0.44

  tax=totMinsMexs*5/100
  
  return f"your bill is= {totMinsMexs+tax:.2f} \nadditional charge for minutes= {reminingMins:.2f}\nadditional charge for messages= {reminingMexs:.2f}\ntaxes= {tax:.2f}";

print(calcBill(minutes,messages))
