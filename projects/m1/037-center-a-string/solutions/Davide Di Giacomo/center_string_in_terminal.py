def center_string(s, w):
    if len(s)>=w:
        return s
    else:
        a = " "
        spaces=[]
        width = ((w - len(s)) // 2) +1
        for i in range(1, width):
            spaces.append(a)
        return((''.join(spaces)) +s)
        
def main():
    print(center_string("This program", 5))
    print(center_string("is able", 32))
    print(center_string("to center", 50))
    print(center_string("a string!", 70))
        
if __name__ == "__main__":
    main()