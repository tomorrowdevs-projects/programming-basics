def token_string(math_exp):
    symbols = ["*","/","^","-","+","(",")","[","]","{","}"]
    tokens = []
    number = ""
    for i in math_exp:
        if i in symbols:
            if number != "":
                tokens.append(number)
                number = ""
            tokens.append(i)

        if i.isdigit():
            number += i
    
    return tokens

def main():
    user_exp = input("Enter a valid mathematical expression: ")
    print(token_string(user_exp))

if __name__ == "__main__":
    main()
    