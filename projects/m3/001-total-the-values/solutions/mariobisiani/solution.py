#script to get a sum of values until user input a blank value

def getValue():
    #get int from user
    value_from_user = int(input('Insert a number (leave blank to exit):'))
    if value_from_user == 0:
    #base case
        return value_from_user
    else:
    #recursive case
        value_from_user = value_from_user + getValue()
        return value_from_user

sum_of_values = getValue()
print('\nThe sum of all input is: ', sum_of_values)

