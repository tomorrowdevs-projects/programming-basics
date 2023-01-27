group_list = []

addition = 0

line = (input("Insert: guest age - blank to quit ---> "))

# here there is a while cycle that play apparently with integer numbers, but it is FALSE: all these numbers are considered instead
# al STRING - it was done in order to avoid conflicts:
# between Integer and String

while line != "":
    age = int(line)
    #group_list.append(age)
    line = (input("Insert: guest age - blank to quit ---> "))
    

#for el in group_list:    
    #el = int(el) # here 'el' becames an Integer, so group_list has suddenly become a list of numbers 
    

    if age <2 or age ==2: 

        addition = addition + 0

    elif 3<= age <=12:

        addition = addition + 14

    elif age>65 or age ==65:

        addition = addition + 18

    else:

        addition = addition + 23


print(f"The group has to pay: {(format(addition, '.2f'))}")