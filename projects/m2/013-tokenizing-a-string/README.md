# Tokenizing a String

Tokenizing is the process of converting a string into a list of substrings, known as tokens. In many circumstances, a list of tokens is far easier to work with than the original string because the original string may have irregular spacing. In some cases substantial work is also required to determine where one token ends and the next one
begins.
In a mathematical expression, tokens are items such as operators, numbers and
parentheses. The operator symbols that we will consider in this (and subsequent) problems are *, /, ˆ, - and +. Operators and parentheses are easy to identify because the token is always a single character, and the character is never part of another token. Numbers are slightly more challenging to identify because the token may consist of multiple characters. Any sequence of consecutive digits should be treated as one number token.

Write a function that takes a string containing a mathematical expression as its only parameter and breaks it into a list of tokens. Each token should be a parenthesis, an operator, or a number. (For simplicity we will only work with integers in this problem). Return the list of tokens as the function’s only result.

You may assume that the string passed to your function always contains a valid mathematical expression consisting of parentheses, operators and integers. However, your function must handle variable amounts of whitespace (including no whitespace) between these elements. Include a main program that demonstrates your tokenizing function by reading an expression from the user and printing the list of tokens. Ensure that the main program will not run when the file containing your solution is imported into another program.


# Documentation

For this project solution you may use:

- Arrays (Lists)
- Functions
- Conditionals
- Repetitions

# Deadline

This project requires to be completed in a maximum of **4 hours**
