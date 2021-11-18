# Write a program that reads values from the user until a blank line is entered.
# Display the total of all of the values entered by the user (or 0.0 if the first value entered is a blank line).

def total_the_values():
    print("\nEnter an integer")
    user_input = int(input())
    
    if user_input == 0:
        return 0
    else:
        return user_input + total_the_values()
    
print(total_the_values())