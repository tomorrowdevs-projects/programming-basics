# Average

# In this exercise you will create a program that computes the average of a collection of values entered by the user.
# The user will enter 0 as a sentinel value to indicate that no further values will be provided.
# Your program should display an appropriate
# error message if the first value entered by the user is 0.

# Hint: Because the 0 marks the end of the input it should not be included in the average.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **1 hour**

# I create a variable user_input to allow the user to enter int numbers.
user_input = int(input("Enter a number: "))
numbers = []  # Empty list to collect inputs from the user
# Display error message if the first input is 0.
if user_input == 0:
    print("Error: the first entry cannot be 0")

# Collect all user's inputs and create a list with them, terminate when input is 0.
while user_input != 0:
    numbers.append(user_input)
    user_input = int(input("insert number: "))


# I create a function to use sum and len method to calculate average.
# Return Error if the user provides less than 2 valid entries.
def avg(list):
    if len(list) > 1:
        return sum(list)/len(list)
    else:
        return "Error"


print("Average: {}".format(avg(numbers)))
