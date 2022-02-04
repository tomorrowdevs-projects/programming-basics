import random
n = []
while len(n)  != 6:
 x = random.randint(1,50)
 if x not in n:
  n.append(x)
 print(x)
n.reverse()
print(n)






