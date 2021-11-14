# Create a program that determines and displays the number of unique characters in a string entered by the user.

# For example, Hello, World! has 10 unique characters while zzz has only one unique character.

# Use a dictionary or set to solve this problem.

print("\nEnter a string")
user_input = input()
lower_string = user_input.lower()
unique_characters = {}

for l in lower_string:
    if l not in unique_characters:
        unique_characters[l] = 1
    else:
        unique_characters[l] += 1

keys_list = list(unique_characters.keys())
print(len(keys_list))