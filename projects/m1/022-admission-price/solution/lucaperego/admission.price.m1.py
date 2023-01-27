

group_list = []

sum = 0

line = (input("Insert: guest age - blank to quit ---> "))

# here there is a while cycle that play apparently with integer numbers, but it is FALSE: all these numbers are considered instead
# al STRING - it was done in order to avoid conflicts:
# between Integer and String

while line != "":
    age = int(line)
    group_list.append(age)
    line = (input("Insert: guest age - blank to quit ---> "))
    

for el in group_list:    
    el = int(el) # here 'el' becames an Integer, so group_list has suddenly become a list of numbers 
    

    if el <2 or el ==2: 

        sum = sum + 0

    elif 3<= el <=12:

        sum = sum + 14

    elif el>65 or el ==65:

        sum = sum + 18

    else:

        sum = sum + 23


print(f"The group has to pay: {(format(sum, '.2f'))}")