i = 0
total = 0
num = {}

num[i] = int(input("Insert number different to 0 to start and then 0 to finish\n"))

if (num[0]==0):

    print("The first number can't be 0") 

while num[i] != 0:

    total += num[i]
    average = total / (i + 1)
    i += 1
    num[i] = int(input("Insert next number\n"))

print("Average: {} ".format(average))
    
        

        