import random 

cont_max=0
max=0
for i in range (0,100):
     numbers = random.randint(1,100)
     if numbers>max :
         max=numbers
         print (str(numbers) +" is update")
         cont_max=+1
         i=+1
     else:
        print (str(numbers))

print("The maximum value found was " + str(max))
print("The maximum value was updated "+ str(cont_max)+ " times")