print("Insert ages of the group's members. Blank to quit")

total_cost = 0

count = 1
age = (input("Age {} :".format(count)))

while age != "":
   age = int(age)
   if 3<=age<=12:
      total_cost += 14
   elif 12<age<65:
      total_cost += 23
   elif age>=65:
      total_cost +=18
   count += 1
   age = (input("Age {} :".format(count)))

print("Total amount requested to enter in the zoo: {} $".format(total_cost))