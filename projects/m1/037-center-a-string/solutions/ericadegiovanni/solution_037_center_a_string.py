import os

# take a string *s* as  first parameter
#  and the width of the window in characters, *w*, as its second parameter. 

size = os.get_terminal_size()
width = size.columns

def string_center(s, w):

    # Your function will return a new string that includes whatever leading
    # spaces are needed so that s will be centered in the window 

    if len(s) >= w:
        return s
    else:
        spaces = abs((len(s) - w) // 2)
        print(' ' * spaces + s)

def main():
    string_center('ciao', width)
    string_center('Holaaaa', width)
    string_center('ciaociaociaociaociaociaociao', width)
    return 

if __name__ == '__main__':
    main()
    