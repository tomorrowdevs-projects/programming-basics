#script to get a sum of values until user input a blank value

def getValue():
    #get int from user
    value_from_user = input('Insert a number (leave blank to exit):')
    if value_from_user == "":
    #base case
        return 0
    else:
    #recursive case
        value_from_user = int(value_from_user) + int(getValue())
        return value_from_user

sum_of_values = getValue()
print('\nThe sum of all input is: ', sum_of_values)

