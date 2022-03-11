print("you can start to enter your number for average calculation: ")

number={}
index=0
sum=0

number[index] = int(input("Enter number: "))
if (number[0]==0):
    print("Error") 
else:  
    while True:
        sum=sum+number[index]
        average=sum/(index+1)
        index+=1
        number[index] = int(input("Enter number: "))
        if(number[index]==0):
            print("The average is: {} ".format(average))
            break
        