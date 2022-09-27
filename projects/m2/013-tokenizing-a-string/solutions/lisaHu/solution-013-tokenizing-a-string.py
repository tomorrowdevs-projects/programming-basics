def tokenizing_string(s):
    #1st list of operators and parenthesis, 2nd list will store result
    ope_par ='[]()+-*/?^'
    tokens = []
    num = ''
    for i in s:
        #if character in string is in list ope_par, it will check if there is something
        #in variable num. if there is, it will append to tokens list and clear the var
        #whether it will append the var num, the character in ope_par will be appended
        if i in ope_par:
            if num:
                tokens.append(num)
                num = ''
            tokens.append(i)
        #unless the character is a blank space, the character will be added to num variable
        #and it will be added only after a character in ope_par will be encountered
        else:
            if i == ' ':
                continue
            num += i
    else:
        #at the end of loop, if the last character of string is not in ope_par, it will be
        #appended in result list
        if num:
            tokens.append(num)
        return tokens

if __name__=='__main__':
    string = input('Enter mathematical expression (no letters):\n')
    print(tokenizing_string(string))
