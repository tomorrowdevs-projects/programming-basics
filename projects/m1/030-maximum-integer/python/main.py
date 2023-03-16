from random import randint

list_number = []
my_number = 100
max_number = 0
count = 0

while len(list_number) < my_number:
    x = randint(1, 100)
    list_number.append(x)  #append randoom value on the list 
    if x > max_number:
        max_number = x
        print(f"{x} (new max)")
        count += 1
    else:
        print(x)
        
print(f"The max number was {max_number}")
print(f"The maximum value was updated {count} times")