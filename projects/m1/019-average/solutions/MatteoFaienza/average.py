# This program calculates the average of a set of numbers
userNumber = int(input("Enter a integer number: "))
inputCounter = 0
totalSumUserNumber = 0

if userNumber == 0 :
  print("Error , enter a other number")
  
while userNumber > 0 :
    totalSumUserNumber = totalSumUserNumber + userNumber
    inputCounter = inputCounter + 1
    userNumber = int(input("Enter a integer number: ")) 

averageTotalUserNumber = totalSumUserNumber/inputCounter

print(averageTotalUserNumber) 