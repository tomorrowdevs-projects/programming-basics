#The Sieve of Eratosthenes is a technique that was developed more than 2,000 years ago to easily find all of the prime numbers between 2 and some limit, say 100. A description of the algorithm follows:

#Write down all of the numbers from 0 to the limit Cross out 0 and 1 because they are not prime

#Set p equal to 2

#While p is less than the limit do Cross out all multiples of p (but not p itself) Set p equal to the next number in the list that is not crossed out

#Report all of the numbers that have not been crossed out as prime

#The key to this algorithm is that it is relatively easy to cross out every nth number on a piece of paper. This is also an easy task for a computer—a for loop can simulate this behavior when a third parameter is provided to the range function.

#When a number is crossed out, we know that it is no longer prime, but it still occupies space on the piece of paper, and must still be considered when computing later prime numbers. As a result, you should not simulate crossing out a number by removing it from the list. Instead, you should simulate crossing out a number by replacing it with 0. Then, once the algorithm completes, all of the non-zero values in the list are prime.

#Create a program that uses this algorithm to display all of the prime numbers between 2 and a limit entered by the user. If you implement the algorithm correctly you should be able to display all of the prime numbers less than 1,000,000 in a few seconds.


#helper function filling an array with number within a range
def writer(count):
  output=[]
  for i in range(count+1):
    output.append(i)
  return output


#helper function raising down not prime number to 0
def zeroing(arr,div):
 output=[]
 for x in arr:
   if(x==div):
    output.append(x)
   elif(x%div==0):
     output.append(0)
   else:
    output.append(x)
 return output

#helper function deleting 0
def deleteZero(arr):
  output=[]
  for x in arr:
    if(x==0):
      continue
    else:
      output.append(x)
  return output


#main function calculating prime values as asked by the exercise
def eratosthene(value):
  p=2
  output=[]
  #writer function calling filling output array with value in the range
  output=writer(value)
  #while loop calling zeroing function 
  while p<value:
   output=(zeroing(output,p))
   p=p+1
  #removing 2
  output.remove(2)
  #deleteZero function calling eliminating 0
  output2=deleteZero(output)
  return output2

def main():
  userinput=int(input("please insert your value: "))
  print(eratosthene(userinput))

main()

