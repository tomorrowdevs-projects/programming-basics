# Admission Price

# A particular zoo determines the price of admission based on the age of the guest. 
# Guests 2 years of age and less are admitted without charge. 
# Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00.
# Admission for all other guests is $23.00.
# Create a program that begins by reading the ages of all of the guests in a group from the user,
# with one age entered on each line.
# The user will enter a blank line to indicate that there are no more guests in the group.
# Then your program should display the admission cost for the group with an appropriate message. 
# The cost should be displayed using two decimal places.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

# I'm going to leave aside scenarios where the user enters not valid values:
# (blank first, negative numbers, floating point numbers and letters)

# Ask users for the age and create an array that collects the input.
age = input("Enter your age: ")
age_group = [age]
total_fee = []  # Create an empty array that is coming handy for the final result
# Collect inputs for every single age in a group of people and include it in the previous age_group array
while age != "":  # (blank to quit)
    age = input("Enter your age (blank to quit): ")
    age_group.append(age)

age_group.pop()  # Pop the last input entry to get rid of the blank space as last index of the array
# check every index in age_group and assign a dependant value.
# collect these values total_fee empty array created at the beginning.
for i in age_group:
    if 0 <= int(i) <= 2:
        total_fee.append(0)
    elif 3 <= int(i) <= 12:
        total_fee.append(14)
    elif 65 <= int(i):
        total_fee.append(18)
    else:
        total_fee.append(23)
# add every index in total_fee and display the message
print("Total admission fee is {:.2f}$".format(sum(total_fee)))
