#In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. Write a main program that demonstrates the function.


#the function converts meters in km and then it applies fares
def calcFares(km):
  meters=km*1000
  return f"your fare is {((meters/140)*0.25)+4:.2f}"

kilometers=int(input("how many km did you travel?: "))
print(calcFares(kilometers))