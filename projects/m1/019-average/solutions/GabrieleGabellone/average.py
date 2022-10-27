#Average
#This program calculates the average of a set of values entered by user
#The user will enter 0 as a sentinel value to indicate that no further values will be provided.
entered_values = []
user_value = -1
while user_value != 0:
    user_value = int(input("Enter a value: "))
    if user_value == 0 and len(entered_values) == 0: 
        print("Error! You cannot enter 0 as the first value")
        user_value = -1
        continue
    elif user_value == 0: break
    entered_values.append(user_value)

index = sum = 0
while index < len(entered_values):
    sum = sum + entered_values[index]
    index += 1
average = sum / len(entered_values)
print("The average of the entered values is", average)