# defines the function that display a centered string with two parameter: "s" as the string and "w" as the width of the screen (whole number)
def center_string(s, w):  
# reassigns the value of w as a integer and declares a variable "new_string" to store the result
    w = int(w)
    new_string = '' 
# checks if length of string is equal to the width, and if true return the string
    if len(s) == w:
        return s
# check if length of is string is less than width, and if true iterate and build a list adding space and  the string to reach the porpouse, at the end join the list's element together and return it as result
    elif len(s) < w:
        new_string_list = [s]
        add = len(s) + w
        for i in range(1, add):
            new_string_list.append(' ')
            new_string_list.insert(0, ' ')
        new_string = ''.join(new_string_list)
        return new_string
    else:
# if the length of string is greater than width, it returns a string with first some spaces as their difference divided using floor division followeb by the string
        new_string_list = [s]
        less = ((len(s)-w) // 2)
        for i in range(0, less):
            new_string_list.insert(0, ' ')
        new_string = ''.join(new_string_list)
        return new_string

# defines a main function to demostrate with some examples the function center_string() 
def main():
    print(center_string('ciao!', 2))
    print(center_string('Maremma maiala', 50))
    print(center_string('Trentatrè trentini', 36))

# assign to __name__ value of 'name' so the program could run only if is not imported in another file 
if __name__ == '__main__':
    main()