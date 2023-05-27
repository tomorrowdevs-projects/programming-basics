def token(string):
    string = string.replace(" ", "")
    tokens = []
    cipher = ""
    for s in string:
        if s in "()[]{}+-/*^)":
            if cipher != "":
                tokens.append(cipher)
                cipher = ""
            tokens.append(s)
        else:
            cipher += s
    if string[-1] in "0123456789":
        tokens.append(cipher)
    return tokens


if __name__ == '__main__':
    expression = input("Enter a mathematical expression: ")
    print(token(expression))



