def capitalize(s):
    s = s.capitalize()
    length = len(s)
    for i in range(1, length):
        if s[i] in ".!?":
            if i > len(s) - 3:
                s += "   "
            s = s[:i + 2] + s[i + 2].upper() + s[i + 3:]
        elif s[i] == "i" and s[i - 1] == " ":
            if s[i + 1] in " ?!'.":
                s = s[:i] + s[i].upper() + s[i + 1:]
        if len(s) > length:
            s = s[:length]
    return s


if __name__ == '__main__':
    sentence = input("Enter a string: ")
    print(capitalize(sentence))



