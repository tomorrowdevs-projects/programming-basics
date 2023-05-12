x = range(1, 101)

for n in x:
  if (n%3==0 and n%5==0):
    print("Fizz-Buzz")
  elif (n%5==0):
    print("Buzz")
  elif (n%3==0):
    print("Fizz")
  else:
    print(n)