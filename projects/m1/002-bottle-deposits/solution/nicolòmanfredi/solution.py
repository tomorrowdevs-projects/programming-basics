from operator import lt

print("Hi, recycle here your plastic bottle")



numberOfBottles = int(input("Insert number of small containers: "))
sizeOfBottles = int(input("Insert number of large containers: "))
a1 = round(float(numberOfBottles * 0.10), 2)
b1 = round(float(sizeOfBottles * 0.25), 2)
print(str("%.2f" %(a1+b1)) + "$")
    











