operator_symbols = ['*', '/', '^', '-', '+']
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
exp = input('enter exp: ')

final = []
number = ''

# This function takes a string containing a mathematical expression as its only parameter and breaks it into a list of tokens. 
# Each token should be a parenthesis, an operator, or a number (only integers).

for i in range(len(exp)):
    if exp[i] in operator_symbols:
        final.append(number)
        final.append(exp[i])
        number = ''
    elif exp[i] in numbers:
        number += exp[i]
    elif exp[i] == '':
        continue
        
final.append(number)

print(final)