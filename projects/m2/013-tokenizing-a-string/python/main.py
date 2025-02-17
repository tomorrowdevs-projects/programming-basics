def tokenizer(a_string):
    valid_token = ['(', ')', '+', '-', '/', '*', '^']
    token_list = []
    num_list = []
    whitespace = ' '
    

    for el in a_string:
        
        if el.isdigit():
            num_list.append(el)

            if el is a_string[-1]:
                num = ''.join(num_list)
                token_list.append(num)
                num_list = []

        elif el in valid_token:
            num = ''.join(num_list)

            if num != '':
                token_list.append(num)
                num_list = []

            token_list.append(el)
        
        elif el == whitespace:
            pass
        
        else:
            return print('The string contain invalid token, the string must contain just parenthesis, operator, or number')
            
    return token_list
            
if __name__ == '__main__':
    userInput = input('Enter a valid expression to tokenizing it: ')

    print(tokenizer(userInput))
