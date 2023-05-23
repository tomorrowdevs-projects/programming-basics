num = int(input("Hey man it's make a deal: you give me 4 digit-number and I give you the sum ofthose 4 digits...How about that? "))
X = num //1000
Y = (num - X*1000)//100
Z = (num - X*1000 - Y*100)//10
W= num - X*1000 - Y*100 - Z*10
print("BOOYA!!", X+Y+Z+W)
