# Is a String a Palindrome?

# A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words. 

# Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. 
# Display the result, including a meaningful output message.

# Aibohphobia is the extreme or irrational fear of palindromes. 
# This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome. 
# Ailihphilia is the fondness for or love of palindromes. It was constructed in the same manner from the -philia suffix.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**


'''user_word = input("Check if the word is a palindrome: ").lower()
reverse = user_word[::-1]


if user_word == reverse:
    print("Yes, the word {} is a palindrome".format(user_word))
else:
    print("Nope, {} is not a palindrome".format(user_word))'''


def isPalindrome(string):
    lenght = len(string)
    isPal = True
    for i in range(lenght//2):
        if string[i] != string[lenght-1-i]:
            isPal = False
            return isPal
    return isPal


def main():
    word = input("Check if a word is a palindrome: ").lower()
    if isPalindrome(word):
        print("{} is a palindrome".format(word))
    else:
        print("{} is not a palindrome".format(word))



if __name__ == '__main__':
    main()
