def string(s , w):
    if len(s) >= w:
        return s
    else:
        spaces = ""
        for i in range(0,-(((len(s)-w) // 2))):
            spaces += " "
    return spaces + s

def main():
    print(string("sbiriguda", 7))
    print(string("sbiriguda", 240))
    print(string("prematurata la supercazzola", 18))
    print(string("prematurata la supercazzola", 179))
    print(string("ugo", 4))
    print(string("ugo", 54))

if __name__ == "__main__":
    main()