#In this exercise you will simulate 1,000 rolls of two dice. Begin by writing a function that simulates rolling a pair of six-sided dice. Your function will not take any parameters. It will return the total that was rolled on two dice as its only result. Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times. As your program runs, it should count the number of times that each total occurs. Then it should display a table that summarizes this data. Express the frequency for each total as a percentage of the number of rolls performed. Your program should also display the percentage expected by probability theory for each total.

import random
def function():
  dice1={
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  }
  dice2={
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  }
  arrProbDice1=[]
  arrProbDice2=[]
  
  #filling the dice1 obj with value
  for x in range(0,1000):
   number= random.randint(1,6)
   dice1[number]=dice1[number]+1
  #filling the dice2 obj with value
  for x in range(0,1000):
   number= random.randint(1,6)
   dice2[number]=dice2[number]+1
   #percentages of dice 1 are pushed into arrProbDice1
  for key,value in dice1.items():
    arrProbDice1.append((value*100)/1000)
   #percentages of dice 1 are pushed into arrProbDice2
  for key,value in dice2.items():
   arrProbDice2.append((value*100)/1000)
  
  #for loop to print the output
  i=0
  for x in arrProbDice1:
    i=i+1
    print(f"DICE 1: for {i} the PR is {x}")
  
  for x in arrProbDice2:
    i=i+1
    print(f"DICE 2: for {i-6} the PR is {x}")
    

print(function())

