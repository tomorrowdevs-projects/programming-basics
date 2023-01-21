from random import randint

x = randint(0,100)
print(x,"<== Initial Value")
numbers = 0
update = 0

while numbers < 100:
    
    y = randint(0,100)
    
    if y > x:
        x = y
        print(x,"<== Update")
        update += 1
    else:
        print(y)
    
    numbers += 1

print(("The maximum value found was {}") .format(x))
print(("The maximum value was updated {} times") .format(update)) 

