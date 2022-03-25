def calcMeasure(quantity, unit):
  cup=0
  tablespoon=0
  teaspoon=0
  if(unit=="cup"):
    cup=quantity
  elif(unit=="teaspoon"):
    cup=quantity//48
    reminderC=quantity%48
    tablespoon=reminderC//3
    reminderTableSpoon=reminderC%3
    teaspoon=reminderTableSpoon//2
  else:
    cup=quantity//16
    reminderC=quantity%16
    tablespoon=reminderC//3
    reminderTableSpoon=tablespoon%3
    teaspoon=reminderTableSpoon//2

  return f"for your recipe you need {cup} cup, {tablespoon} tablespoon {teaspoon} teaspoon"


def main():
  quantityInp=int(input("insert quantity (quantity shuld be a positive integer): "))
  unitInp=input("insert insert your unit (cup, tablespoon, teaspoon): ")
  if(unitInp=="cup" or unitInp=="tablespoon" or unitInp=="teaspoon"):
   print(calcMeasure(quantityInp, unitInp))
  else:
    "please insert a valid input"

main()
