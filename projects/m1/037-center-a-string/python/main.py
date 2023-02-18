def center_a_string(s :str, width: int) -> str:
    '''
    Return a new string that includes whatever leading spaces are needed so that *s* will be centered in the window of width *width*.
    If *s* is longer than *width*, Return *s*    
     Args:

        s: str
            string that will be centered
        width: int 
            window width in number of characters

    Returns:

        centered_string: str
    '''
    if len(s) >= width:
        return s
    else:
        centered_string = ""
        total_spaces = -((len(s)-width)//2)
        for index in range(0,total_spaces):
            centered_string += " "
        centered_string += s
        return centered_string
    
def create_window(width: int):
    '''
    Print *width* '-' to simulate a window 
    '''
    for i in range(0,width):
        if i == width-1:
            print("-")
        else:
            print("-",end="")
    
if __name__ == "__main__":
    width = int(input("Insert the width of your window: "))
    create_window(width)

    print(center_a_string("Welcome to my script",width))
    print(center_a_string("I'm Raffaella",width))
    print(center_a_string("Today I've created this function",width))
    print(center_a_string("to centre all strings that you want",width))
    print(center_a_string("but remember ...",width))
    print(center_a_string("you have to create a window larger enough!!",width))
    print(center_a_string("Try to insert a window of 5 char",width))
    print(center_a_string("It will be as if I did nothing!!",width))
    print(center_a_string("Bye Bye",width))


    create_window(width)