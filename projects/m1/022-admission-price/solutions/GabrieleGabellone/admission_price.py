#Admission Price

admission_price = 0
while True:
    age = input("Enter an age (blank to quit): ")
    if len(age) == 0: break
    age = int(age)
    if age <= 2: continue
    elif 3 <= age <= 12: admission_price = admission_price + 14
    elif age >= 65: admission_price = admission_price + 18
    else: admission_price = admission_price + 23
print("The admission cost for the group is ${:.2f}".format(admission_price))