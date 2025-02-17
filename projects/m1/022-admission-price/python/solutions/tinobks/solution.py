cost = 0
age = input("Enter the age of the guest (blank if there is no more guest): ")

while age != "":
    age = int(age)

    if 3 <= age <= 12:
        cost += 14
    
    elif 12 < age < 65:
        cost += 23

    elif age > 65:
        cost += 18

    age = input("Enter the age of the guest (blank if there is no more guest): ")

print(("The admission cost for this group is ${:.2f}") .format(cost))



