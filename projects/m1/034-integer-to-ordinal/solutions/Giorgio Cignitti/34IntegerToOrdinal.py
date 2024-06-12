#Words like first, second and third are referred to as ordinal numbers. In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing the appropriate English ordinal number as its only result. Your function must handle the integers between 1 and 12 (inclusive). It should return an empty string if the function is called with an argument outside of this range. Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. Your main program should only run when your file has not been imported into another program.


#function that works with an array containing strings for ordinal numbers. With an if/else the function checks if the input is a valid number and is not out of range (max>12).
def calcOrdinal(integer):
  answer=""
  arr=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth", "tenth","eleventh","twelfth"]
  if(integer > 12):
   answer="out of range"
  else:
   answer=arr[integer-1]
  return answer
  
userInput=int(input("please insert a number ranging from 1 to 12: "))
print(calcOrdinal(userInput))