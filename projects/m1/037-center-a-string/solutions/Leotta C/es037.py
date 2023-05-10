def center(string, width):
    length = len(string)
    if length >= width:
        return string
    difference = (width - len(string)) // 2
    for i in range(difference):
        string = " " + string
    return string

if __name__ == '__main__':
    s = "nel mezzo del cammin di nostra vita"
    l = "mi ritrovai in una selva oscura"
    x = "che la diritta via era smarrita"
    w = int(input("Enter a width: "))
    print(center(s,w))
    print(center(l, w))
    print(center(x,w))

