def tokenizing(esp):

    token = ["^", "-", "+", "/", "*", "(", ")", "[", "]", "{", "}"]
    t_list = []
    n = ''

    for i in range(len(esp)):
        if esp[i] in token:
            if n:
                t_list.append(n)
                n = ''
            t_list.append(esp[i])
        elif 48 <= ord(esp[i]) <= 57:
            n += esp[i]
        else:
            if n:
                t_list.append(n)
                n = ''
                continue
    if n:
        t_list.append(n)
    return t_list
def main():
    
    user = input("Write a mathematical expression: ")
    print(tokenizing(user))

if __name__ == "__main__":
    main()