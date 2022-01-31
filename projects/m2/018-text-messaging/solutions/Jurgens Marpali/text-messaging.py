def hotkeys(string):
    keypad = {
        '1': ['.', ',', '?', '!', ':'],
        '2' : ['A', 'B', 'C'],
        '3' : ['D', 'E', 'F'],
        '4' : ['G', 'H', 'I'],
        '5' : ['J', 'K', 'L'],
        '6' : ['M', 'N', 'O'],
        '7' : ['P', 'Q', 'R', 'S'],
        '8' : ['T', 'U', 'V'],
        '9' : ['W', 'X', 'Y', 'Z'],
        '0' : [' ']
    }

    txt = string.upper()
    result = ""
    keys = list(keypad.items())

    for i in range(len(txt)):
        for n in range(len(keys)):
            for e in range(len(keys[n][1])):
                if txt[i] == keys[n][1][e]:
                    result += ((e+1)*keys[n][0])
    return result

def main():
    user = input("Enter a Text to convert: ")
    print(hotkeys(user))

if __name__ == "__main__":
    main()