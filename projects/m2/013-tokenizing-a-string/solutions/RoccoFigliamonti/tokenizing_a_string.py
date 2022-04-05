"""In a mathematical expression, tokens are items such as operators, numbers and
parentheses. The operator symbols that we will consider in this (and subsequent) problems are *, /, ˆ, - and +. Operators and parentheses are easy to identify because the token is always a single character, and the character is never part of another token. Numbers are slightly more challenging to identify because the token may consist of multiple characters. Any sequence of consecutive digits should be treated as one number token.

Write a function that takes a string containing a mathematical expression as its only parameter and breaks it into a list of tokens. Each token should be a parenthesis, an operator, or a number. (For simplicity we will only work with integers in this problem). Return the list of tokens as the function’s only result.
"""



def tokenList(s):
    tokens = []
    for i in s:
        if i.isdigit():
            if tokens!=[] and tokens[-1].isdigit():
                tokens[-1]+=i
            else:
                tokens.append(i)
        elif i in '*/^+-()[]}{=':
            tokens.append(i)
    return tokens



express = "5+(20 +1   ) * (302/5-6)^3"
print(tokenList(express))