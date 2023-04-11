"""
A string is a palindrome if it is identical forward and backward.
For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

Write a program that reads a string from the user and uses a loop to
determine whether or not it is a palindrome.
Display the result, including a meaningful output message.

Aibohphobia is the extreme or irrational fear of palindromes.
This word was constructed by prepending the -phobia suffix with it’s reverse,
resulting in a palindrome.
Ailihphilia is the fondness for or love of palindromes. It was constructed in
the same manner from the -philia suffix.

"""

p = input("Inserire la parola da verificare se è una palindroma:")
#1° SOLUZIONE
if str(p) == str(p)[::-1] :
    print("It's a palindrome!")
else:
    print("It's not palindrome")

#2° SOLUZIONE
if str(p) == "".join(reversed(p)):
    print("It's a palindrome!")
else:
    print("It's not palindrome")