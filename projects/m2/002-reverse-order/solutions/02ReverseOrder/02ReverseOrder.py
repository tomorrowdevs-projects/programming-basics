#Write a program that reads integers from the user and stores them in an array. Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.
def displayArr():
  arr=[]
  while True:
    try:
     userInput=int(input("insert a value(press 0 to stop and sort): "))
     if(userInput==str):
       ("please insert a valid integer")
     else:
      arr.append(userInput)
      sortedArr=sorted(arr, reverse=True)
      if(userInput==0):
       break 
    except ValueError:
      print("Oops!  That was no valid number.  Try again...")
  for x in sortedArr[:len(sortedArr) - 1]:
    print(x)
 

print(displayArr())