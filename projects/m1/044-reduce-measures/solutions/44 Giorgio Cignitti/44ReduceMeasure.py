#Many recipe books still use cups, tablespoons and teaspoons to describe the volumes of ingredients used when cooking or baking. While such recipes are easy enough to follow if you have the appropriate measuring cups and spoons, they can be difficult to double, triple or quadruple when cooking Christmas dinner for the entire extended family. For example, a recipe that calls for 4 tablespoons of an ingredient requires 16 tablespoons when quadrupled. However, 16 tablespoons would be better expressed (and easier to measure) as 1 cup. Write a function that expresses an imperial volume using the largest units possible. The function will take the number of units as its first parameter, and the unit of measure (cup, tablespoon or teaspoon) as its second parameter. It will return a string representing the measure using the largest possible units as its only result. For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”.

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
