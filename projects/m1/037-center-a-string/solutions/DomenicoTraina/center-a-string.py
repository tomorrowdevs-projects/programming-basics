s=str(input("Enter String: "))

w=int(input("Enter window width: "))


def centerstring (s,w):
    if w>len(s):
        initialspace=int((w-len(s))/2)
        print ("|", end="")
        for index in range(initialspace):
            print(" ", end="")
        print(s, end="")
        for index in range(initialspace):
            print(" ", end="")
        print ("|")
    else: print ("Error!! windows too little!")

centerstring(s,w)