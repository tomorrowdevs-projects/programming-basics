"""
A string is a palindrome if it is identical forward and backward.
For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

Such palindromes examined the characters in a string,
possibly ignoring spacing and punctuation marks,
to see if the string was the same forwards and backwards.
While palindromes are most commonly considered character by character,
the notion of a palindrome can be extended to larger units.
For example, while the sentence
*“Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?”*
isn’t a character by character palindrome, it is a palindrome when examined a word at a time
(and when capitalization and punctuation are ignored).
Other examples of word by word palindromes include
*“Herb the sage eats sage, the herb”*
and
*“Information school graduate seeks graduate school information”*.

Create a program that reads a string from the user.
Your program should report whether or not the entered string is a word by word palindrome.
Ignore spacing and punctuation when determining the result.
"""


def palindroma(p):
    if str(p) == str(p)[::-1]:
        return True
    else:
        return False

if __name__=='__main__':
    p = input("Inserire la parola da verificare se è una palindroma:")
    print(palindroma(p))