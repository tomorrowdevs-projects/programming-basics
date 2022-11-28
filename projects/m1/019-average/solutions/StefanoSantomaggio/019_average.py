n= float(input("insert a number:"))
som=0
mid=0
if n==0:
    print("First number can't be 0")
else:
    while n!=0:
        som=som+n
        mid+=1
        n=float(input("insert a number:"))
    print ("Average is:", som/mid)
