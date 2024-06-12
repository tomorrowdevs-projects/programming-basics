
def calcPrime(n):
  factor=2
  while factor <= n:
    if n % factor == 0:
        print(factor)
        n /= factor
    else:
        factor += 1
   

while True:
 inputValue=int(input("please insert a number > 2 to start computing: "))
 if(inputValue<=2):
   print("insert a valid poisitive and > 2 value!")
   break
 else:
   calcPrime(inputValue)


#REMEMBER TO UPDATE THE VARIABLE factor=factor+1 and n=n/1