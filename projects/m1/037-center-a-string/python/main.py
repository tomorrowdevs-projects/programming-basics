def center_string(s,w):
    if len(s) >= w:
        return(s)
    else:
        spaces = ((w - len(s)) // 2) * " "
        return(spaces + s)

def main():
    print(center_string("short",22))
    print(center_string("a longer string",22))
    print(center_string("string longer than width",10))

if __name__ == "__main__":
    main()