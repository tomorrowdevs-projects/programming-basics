# In this exercise, you will create a program that reads words from the user until the user enters a blank line.
# After the user enters a blank line your program should dis- play each word entered by the user exactly once.
# The words should be displayed in the same order that they were first entered.

# For example, if the user enters: first second first third second

# then your program should display: first second third

words = []
while True:
    print("\nEnter your word (for stop the sequence enter a blank line)")
    user_input = input()
    words.append(user_input)
    if user_input == "":
        break

noDuplicates = []
for word in words:
    if word not in noDuplicates:
        noDuplicates.append(word)

for noDuplicate in noDuplicates:
    print(noDuplicate)
