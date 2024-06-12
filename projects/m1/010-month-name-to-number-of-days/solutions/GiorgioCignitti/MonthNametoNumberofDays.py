month=input("insert a month ")
lowerCaseMonth=month.lower();

def checkMonth(month):
  if(month=="november" or month=="june" or month=="april" or month=="september" ):
    return f"30 days"
  elif(month=="february"):
    return  f"28 or 29 days"
  else:
    return f"31 days"

print(checkMonth(lowerCaseMonth))