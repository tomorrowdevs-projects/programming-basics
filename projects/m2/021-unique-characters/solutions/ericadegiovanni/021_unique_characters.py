
# Create a program that determines and displays the number of unique characters in a string entered by the user. 
# Use a dictionary or set to solve this problem.

word = len(set(input('Insert a string: ')))
print(f'This string has {word} unique characters.')