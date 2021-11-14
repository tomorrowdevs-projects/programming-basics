def tokenizing_expression(e):
    oper_plus_parent = ["^", "-", "+", "/", "*", "(", ")", "[", "]", "{", "}"]
    token_list = []
    number = ""
    for i in range(len(e)):
        if e[i] in oper_plus_parent:
            if number:
                token_list.append(number)
                number = ""
            token_list.append(e[i])
        elif 48 <= ord(e[i]) <= 57:
            number += e[i]
        else:
            if number:
                token_list.append(number)
                number = ""
                continue
    if number:
        token_list.append(number)
    return token_list


if __name__ == "__main__":
    expression = input("Enter an expression: ")
    print(expression)
    print(tokenizing_expression(expression))