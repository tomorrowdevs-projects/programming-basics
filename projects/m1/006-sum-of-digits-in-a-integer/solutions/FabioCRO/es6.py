
number = input("enter an integer: ")

# 1 5 4 7
sm = 0
a = number[0]
b = number[1]
c = number[2]
d = number[3]

for n in number:
   sm += int(n)

sm = int(a)+int(b)+int(c)+int(d)

print("{}+{}+{}+{}={}".format(a,b,c,d,sm))
