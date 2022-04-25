#An integer, n, is said to be perfect when the sum of all of the proper divisors of n is equal to n. For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28. Write a function that determines whether or not a positive integer is perfect. Your function will take one parameter. If that parameter is a perfect number then your function will return True. Otherwise it will return False. In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.

#NOTE the function works for small number.....the function makes a crash while passing big number such as 100000000

#reducer function
def reduceFunc(arr):
  summa=0
  for x in arr:
    summa=summa+x
  return summa

#function returning true in case of perfect number
def properDivisor(num):
  output=[]
  reduced=0
  denom=num-1
  while denom != 0:
    value=num%denom
    if(value==0):
      output.append(denom)
      denom=denom-1
    else:
      denom=denom-1
  reduced=reduceFunc(output)
  if(reduced==num):
    return True
  else:
    return False

#function checking the perfect number betwenn one range
def checkPerfectNumbers(num):
  output=[]
  value=""
  for x in range(1, num):
    value=properDivisor(x)
    if(value):
     output.append(x)
  return output


def main():
  inputUser=int(input("please insert a value: "))
  return properDivisor(inputUser)

#print(main())

print(checkPerfectNumbers(10000))

