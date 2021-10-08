# In this exercise you will create a program that computes the average of a collection of values entered by the user.
# The user will enter 0 as a sentinel value to indicate that no further values will be provided.
# Your program should display an appropriate error message if the first value entered by the user is 0.

# Hint: Because the 0 marks the end of the input it should not be included in the average.

values = []
print("\nEnter your values and find the average (the last value has to be 0)")

while True:
    print("\nEnter the value:")
    value = int(input())
    values.append(value)
    

    if values[0] == 0:
        print("The values can't start with 0")
        break

    if value == 0:
        values.remove(value)
        sum_values = sum(values)
        print(sum_values)
        print(len(values))
        print("\nThe average of the values is: " + str(format(sum_values / len(values), ".2f")))
        break
