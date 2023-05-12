
#Consider a sequence of integers that is constructed in the following manner:Start with any positive integer as the only term in the sequence While the last term in the sequence is not equal to 1 do If the last term is even then Add another term to the sequence by dividing the last term by 2 using floor division Else Add another term to the sequence by multiplying the last term by 3 and adding The Collatz conjecture states that this sequence will eventually end with one when it begins with any positive integer. Although this conjecture has never been proved, it appears to be true. Create a program that reads an integer, n, from the user and reports all of the values in the sequence starting with n and ending with one. Your program should allow the user to continue entering new n values (and your program should continue displaying the sequences) until the user enters a value for n that is less than or equal to zero.1 






#global variable storing the computed sequences
sequences=[]

#function calcuting the Conjecture returning an array of int
def calcCollatz(n):
  arr=[]
  arr.append(n)
  while arr[-1] != 1:
    if(arr[-1] %2==0):
      arr.append(arr[-1]//2)
    else:
      arr.append((arr[-1]//3)+1)
  return sequences.append(arr)



#while loop starting program
while True:
  initialValue=int(input("please insert a positive value to trigger the Collatz Conjecture computation: "))
  if(initialValue <= 0):
   print("please enter a positive value")
   break
  else:
    calcCollatz(initialValue)
    print(sequences)
    



