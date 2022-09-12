def center(string, window):
    #compute the amount of characters in string
    lenght_string = len(string)

    #if amount of chars in string is bigger or equal to window, return string
    if lenght_string >= window:
        return print(string)
    
    #else: create empty var that will store leading space and calculate in integers the amount of leading space on left side of the string
    #add a blank space to empty var for tot times declared in range
    #return the var with leading spaces and string
    else:
        empty_space = ''
        leading_space = (window - len(string)) // 2
        for space in range(leading_space):
            empty_space += ' '
        return print(empty_space + string)

#get input from user and call function
string = input('Enter a string: ')
window = int(input('Enter the width of the window as integer: '))
center(string, window)