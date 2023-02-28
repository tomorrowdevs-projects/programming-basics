def tokenizing_a_string(math_exp:str) -> list:

    tokens = []
    tokens_index_first = 0
    tokens_index_last = 0

    math_symbols = "+-/*^()[]}{"
    digits = "0123456789"
    exp_index = 0

    while exp_index < len(math_exp):

        if math_exp[exp_index] in math_symbols:
            # if the char in math_exp is a symbol, add it in the tokens list
            token = math_exp[exp_index]
            tokens.append(token)

        elif math_exp[exp_index] in digits:
            # if the char in math_exp is a digit, tokens_index_first and tokens_index_first are initialized to exp_index
            # Tokens_index_first and tokens_index_last are the index of the substring that correspond an integer number
            tokens_index_first = exp_index
            tokens_index_last = exp_index

            while math_exp[tokens_index_last+1] in digits:
                #until the next character is a digit, increment tokens_index_last
                tokens_index_last += 1

            # add integer number substring to the token list
            if tokens_index_first != tokens_index_last:
                token = int(math_exp[tokens_index_first:tokens_index_last+1])
            else:
                token = int(math_exp[tokens_index_first])
            tokens.append(token)
            
            # the while loop continues from the last character examined giving exp_index the value of tokens_index_last
            exp_index = tokens_index_last
        
        exp_index += 1

    return tokens


if __name__ == "__main__"_:
    expression = input("math expression: ")
    print(tokenizing_a_string(expression))

