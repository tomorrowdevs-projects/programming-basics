amount=int(input("human years:  "))

def calcAge(HumanYears):
  dogYears=0
  if(HumanYears<0):
    return f"you have to insert a positive age/number"
  if(HumanYears==1):
    dogYears=10.5
  elif(HumanYears==2):
     dogYears=10.5*2
  else:
    dogYears=21+(HumanYears-2)*4
  return f"the result is {dogYears}"
  
print(calcAge(amount))


