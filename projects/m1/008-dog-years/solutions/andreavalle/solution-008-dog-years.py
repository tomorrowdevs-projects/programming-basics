#conversion function
def conversion():
    hy=int(input("Insert the number of human year(s) ('0' to exit):"))
    if hy>0:
        if hy<=2:
            print("The equivalent of dog year(s) is: ",hy*10.5)
            conversion()
        else:
            print("The equivalent of dog year(s) is: ",2*10.5+(hy-2)*4)
            conversion()
    elif hy<0:
        print("You have inserted a negative number. Are you kidding me?")
        conversion()
    else:
        return()


#main function
print("Welcome")
conversion()
print("Goodbye")
