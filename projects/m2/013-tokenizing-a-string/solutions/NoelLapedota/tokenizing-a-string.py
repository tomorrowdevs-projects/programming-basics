def token():
    a = []
    m = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "(", ")", "[", "]", "{", "}"]
    q =input('Enter a mathematical expression\n')
    for i in q:
        if m in i:
            a.append(i)
    print[a]