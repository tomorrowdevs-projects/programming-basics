def center_string(s, w):
    if len(s) >= w:
        return s
    else:
        leading = ''
        space = (w - len(s)) // 2
        while len(leading) < space:
            leading += ' '
        return leading + s

def main():
    print(center_string('Buongiorno', 30))
    print(center_string('Mi chiamo Stefano', 34))
    print(center_string('Hello world!', 4))
    print(center_string('Belin!', 46))
    print(center_string('Son zeneize, riso raeo, strenzo i denti e parlo ciaeo', 100))

if __name__ == '__main__':
    main()
