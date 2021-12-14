user_value = int(input('Enter a value. (Press 0 to quit.) : '))

user_values = []

while user_value != 0:
    user_values.append(user_value)
    user_value = int(input('Enter a value. (Press 0 to quit.) : '))

print(f'The average is {sum(user_values) / len(user_values)}.')




