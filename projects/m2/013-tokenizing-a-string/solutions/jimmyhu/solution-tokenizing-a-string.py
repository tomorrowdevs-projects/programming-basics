def tokenizing(str):
    data = list(str)
    tokened = [' ']
    for i in range(1,len(data)):
        if data[i].isnumeric() and tokened[len(tokened)-1].isnumeric():
            tokened[len(tokened)-1] = f"{tokened[len(tokened)-1]}{data[i]}"
        elif data[i] == ' ':
            continue
        else:
            tokened.append(data[i])
    tokened.remove(' ')
    return tokened
def main():
    express = input('Write here the expression: ')
    print(tokenizing(express))
if __name__ == '__main__':
    main()