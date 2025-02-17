
import functools

number=int(input("insert a 4 digits number: "))

def fourDigitsSum(number):
  numberStr=str(number)
  listOfLetters = list(numberStr)
  map_object = map(int, listOfLetters)
  listOfNumbers=list(map_object)
  return functools.reduce(lambda a, b: a+b, listOfNumbers)
   
print(fourDigitsSum(number))
