

def total_values():

    #Write a program that reads values from the user until a blank line is entered.
    #Rerturn the total of all of the values entered by the user (or 0.0 if the first value entered is a blank line). 
    n = input('Insert a number (blank to quit): ')
    if n == '': 
        return 0.0
    else:       
        return  float(n) + total_values()

print(total_values())



