number=input("insert values (inser your value without commas i.e. 1,2,2,4 should be written 12240): ")

import functools

def calcAverage(numbers):
  if(numbers[-1] != "0"):
    return "maybe you inserted a letter or there is no 0 at the end"
  else:
   replaced=numbers.replace("0","")
   numberStr=str(replaced)
   listOfLetters = list(numberStr)
   map_object = map(int, listOfLetters)
   listOfNumbers=list(map_object)

  return functools.reduce(lambda a, b: a+b, listOfNumbers)/len(listOfNumbers)

print(calcAverage(number))
  
  


