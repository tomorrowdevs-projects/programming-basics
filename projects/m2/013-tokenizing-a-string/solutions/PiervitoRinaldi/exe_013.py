operator_symbols = ['*', '/', '^', '-', '+']
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
exp = input('enter exp: ')

final = []
number = ''

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