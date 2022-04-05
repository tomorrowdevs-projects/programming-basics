"""Write a program that reads values from the user until a blank line is entered. Display the total of all of the values entered by the user (or 0.0 if the first value entered is a blank line). 

Complete this task using recursion. 

Your program may not use any
loops.

Hint: The body of your recursive function will need to read one value from the user, and then determine whether or not to make a recursive call. Your function does not need to take any arguments, but it will need to return a numeric result."""



def total_value():
    num = input("Please enter a num:")
    if num == "":
        return 0
    else:
        return total_value() + int(num)  

print(total_value())


#5 + total value
    #6 + total value
        # 7 + total value
            # total value = 0
        # 7 + 0 = 7
    #6 + 7 = 13
#5 + 13 = 18
