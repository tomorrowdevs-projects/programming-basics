import random

count = 0
done = 0
max = random.randint(1,100)
print(max)

while True:
    done += 1
    if done == 100:
        break
    
    new = random.randint(1,100)
    if new > max:
        print(str(new) + ' <== update')
        count += 1
        max = new
    else:
        print(str(new))

print('------------ \nThe maximum value found was ' + str(max))    
print('The maximum value was updated ' + str(count) + ' times \n------------')    


    
