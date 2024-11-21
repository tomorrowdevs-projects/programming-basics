import random
update=0
number_max=random.randint(0,100)

for index in range(99):
    number=random.randint(0,100)
    if number>number_max:
        number_max=number
        print(f"{index+1})  {number_max} <== Update new max")
        update+=1
    else:
        print(f"{index+1})  {number}")
print (f"Maximum value generated is {number_max} Updated {update} times")