#What's the minimum number of times you have to flip a coin before you can have three consecutive flips that result in the same outcome (either all three are heads or all three are tails)? What's the maximum number of flips that might be needed? How many flips are needed on average? In this exercise we will explore these questions by creating a program that simulates several series of coin flips. Create a program that uses a random number generator to simulate flipping a coin several times. The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails. Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur. Display an H each time the outcome is heads, and a T each time the outcome is tails, with all of the outcomes for one simulation on the same line. Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome. When your program is run it should perform the simulation 10 times and report the average number of flips needed. Sample output is shown below:

#H T T T (4 flips)
#H H T T H T H T T H H T H T T H T T T (19 flips)
#T T T (3 flips)
#T H H H (4 flips)
#H H H (3 flips)
#T H T T H T H H T T H H T H T H H H (18 flips)
#H T T H H H (6 flips)
#T H T T T (5 flips)
#T T H T T H T H T H H H (12 flips)
#T H T T T (5 flips)
#
#On average, 7.9 flips were needed.


import random


#reduce function calculating the summa of all the items in one array
def reduceFunc(arr):
  summa=0
  for x in arr:
    summa=summa+x
  return summa


#function for random values
def setValue():
  coin=random.randint(0,1)
  value=0
  if coin==0:
    value="H"
  else:
    value="T"
  return value


#It calculates how many flips are required to before getting HHH or TTT. The function fills one array with the random "H" or "T". It checks for the last items by checking the value at poistion [-1], [-2], [-3].
def calcFlip():
  arr=[]
  countH=0
  countT=0
  countFlip=0

  #in order to check for the last 3 items the fn set value is called 3 times and if it doesn t get 3 H or 3 T at the beginning a while loop starts keeping adding items to the array until getting HHH or TTT
  arr.append(setValue())
  arr.append(setValue())
  arr.append(setValue())
  if arr[-3]=="H" and arr[-2]=="H" and arr[-1]=="H" or arr[-3]=="T" and arr[-2]=="T" and arr[-1]=="T":
    countFlip=len(arr)
    print(arr, countFlip)  
    return countFlip
  else:
   while True:   
    if arr[-3]=="H" and arr[-2]=="H" and arr[-1]=="H" or arr[-3]=="T" and arr[-2]=="T" and arr[-1]=="T":
      break
    else:
      countH=countH+1
      countT=countT+1
      arr.append(setValue())
      countFlip=len(arr)
   print(arr, countFlip)    
   return countFlip 


#global variable used to insert how many flips are required to get TTT or HHH. It is gonna be filled the for loop
totFlips=[]
for i in range(10):
 totFlips.append(calcFlip())
 
#calculating the average
print(reduceFunc(totFlips)/10)