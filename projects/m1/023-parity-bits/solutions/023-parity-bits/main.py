if __name__ == '__main__':
    s=input("8 bit: ")
    while(s!=""):
        if (len(s) != 8):
            print("Un byte è composto da 8 bit")
            s = input("8 bit: ")
        if s.count("0")+s.count("1")!=len(s):
            print("Un byte è composto da 0 e 1")
            s = input("8 bit: ")
        conta=s.count("1")
        if conta%2 == 0:
            p = 0
        else:
            p = 1
        print(f"bit di parità pari {p}")
        s = input("8 bit: ")
