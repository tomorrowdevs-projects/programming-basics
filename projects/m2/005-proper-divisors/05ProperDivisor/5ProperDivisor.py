#A proper divisor of a positive integer, n, is a positive integer less than n which divides evenly into n. Write a function that computes all of the proper divisors of a positive integer. The integer will be passed to the function as its only parameter. The function will return a list containing all of the proper divisors as its only result. Complete this exercise by writing a main program that demonstrates the function by reading a value from the user and displaying the list of its proper divisors. Ensure that your main program only runs when your solution has not been imported into another file.


#I used one variable "denom" where its value decrases of -1 after each iteration. The num is divided by denom. If the reminder is equal to 0 the denoom it is pushed into an array output

def properDivisor(num):
  output=[]
  denom=num-1
  while denom != 0:
    value=num%denom
    if(value==0):
      output.append(denom)
      denom=denom-1
    else:
      denom=denom-1
  return output

def main():
  try:
   inputUser=int(input("please insert a value: "))
   return properDivisor(inputUser)
  except:
    print("invalid input")

print(main())
