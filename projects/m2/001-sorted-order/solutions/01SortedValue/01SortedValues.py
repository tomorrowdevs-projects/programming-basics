#Write a program that reads integers from the user and stores them in an array. Your program should continue reading values until the user enters 0. Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. Use either the sort method or the sorted function to sort the array.

def displayArr():
  arr=[]
  while True:
    try:
     userInput=int(input("insert a value (type 0 to stop and sort): "))
     if(userInput==str):
       ("please insert a valid integer")
     else:
      arr.append(userInput)
      if(userInput==0):
       sortedArr=sorted(arr)
       break 
    except ValueError:
      print("Oops!  That was no valid number.  Try again...")
  return sortedArr

print(displayArr())
