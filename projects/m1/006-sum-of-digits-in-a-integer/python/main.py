# ask to user a four digits number
user_number = input("Type a four-digit number:\n")

# check if the number has four digit
if len(user_number) > 4:
    print("Error! More than four digits")
    quit()
elif len(user_number) < 4:
    print("Error! Less than four digits")
    quit()

# use string manipulation to assign a variable for each digit and make it an integer number
first = int(user_number[0])
second = int(user_number[1])
third = int(user_number[2])
fourth = int(user_number[3])

#sum each digit
result = first + second + third + fourth

#print result on screen
print(f'The sum of its own digits is: {result}')
