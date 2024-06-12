# This program takes a string containing a mathematical expression as its only parameter and breaks it into a list of tokens. 
# Each token should be a parenthesis, an operator, or a number (only integers).

def tokenizing_a_string(math_expression):
    operator_symbols = ['*', '/', '^', '-', '+']
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    tokens = []
    number = ''

    for i in range(len(math_expression)):
        if math_expression[i] in operator_symbols:
            tokens.append(number)
            tokens.append(math_expression[i])
            number = ''
        elif math_expression[i] in numbers:
            number += math_expression[i]
        elif math_expression[i] == '':
            continue

    tokens.append(number)

    return tokens

def main():
    math_expression = input('Enter math expression to tokenize it: ')
    print(tokenizing_a_string(math_expression))

if __name__ == "__main__":
    main()