# A string is a palindrome if it is identical forward and backward.
# For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

# Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome.
# Display the result, including a meaningful output message.

# Aibohphobia is the extreme or irrational fear of palindromes.
# This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome.
# Ailihphilia is the fondness for or love of palindromes. It was constructed in the same manner from the -philia suffix.

# parola = "prova"
# print(parola[::-1])

# parola_reverse = parola[::-1]
# if parola == parola_reverse:
#     print(True)
# else:
#     print(False)

print("\nEnter your word or number")
print("If your input is a palindrome the output will be True")
print("if it's not will be False.")

word = input()

def is_palindrome():
    if word == word[::-1]:
        print(True)
    else:
        print(False)

print("\nYour text: " + word)
print("Reverse text: " + word[::-1])
print("Palindrome?")
is_palindrome()