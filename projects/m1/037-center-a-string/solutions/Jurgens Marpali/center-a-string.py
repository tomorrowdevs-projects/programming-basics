def string(s, w):
    if len(s) >= w:
        return s
    else:
        spaces = ""
        for i in range(0,-(((len(s)-w) // 2))):
            spaces += " "
    return spaces + s

def main():
    print(string("Buongiorno", 300))
    print(string("Nocturne No. 20", 170))
    print(string("In C Sharp", 190))
    print(string("By Chopin", 180))

if __name__ == "__main__":
    main()
        