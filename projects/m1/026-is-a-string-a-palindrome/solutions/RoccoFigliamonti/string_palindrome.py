"""A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words. 

Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. 
Display the result, including a meaningful output message.
"""

#versione no ciclo
word = input("Please type a word: ")

print(word)
print(word[-1::-1])

if word.lower() == word[-1::-1].lower():
    print("Palindrome")
else:
    print("No palindrome")


#versione con ciclo
word = input("Please type a word: ")
reverse_word = ""

for el in word[::-1]:
    reverse_word += el
if word.lower() == reverse_word.lower():
    print("Palindrome")
else:
    print("No palindrome")
