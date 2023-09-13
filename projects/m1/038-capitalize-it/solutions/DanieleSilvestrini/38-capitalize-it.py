
def capitalize_it(s):
# converts the string into a list "string_list"
    string_list = list(s)
# iterates the list to find the first non space character and capitalize it
    for i in range(len(string_list)):
        if string_list[i] != ' ':
            string_list[i] = string_list[i].upper()
            break
# iterates the list to find an exlamation mark and capitalize the first non-space characther after it
    for i in range(len(string_list)):
                if string_list[i] == '!':
                    x = i
                    for i in range(x, len(string_list)):
                        if string_list[i] != '!' and string_list[i] != ' ':
                            string_list[i] = string_list[i].upper()
                            break
#iterates the list to find a question mark and capitalize the first non-space characther after it
                elif string_list[i] == '?':
                    x = i
                    for i in range(x, len(string_list)):
                        if string_list[i] != '?' and string_list[i] != ' ':
                            string_list[i] = string_list[i].upper()
                            break
# iterates the list to find a dot and capitalize the first non-space characther after it    
                elif string_list[i] == '.':
                    x = i
                    for i in range(x, len(string_list)):
                        if string_list[i] != '.' and string_list[i] != ' ':
                            string_list[i] = string_list[i].upper()
                            break
# iterates the list to find an “i” if it is preceded by a space and followed by a space, a period, an exclamation mark, a question mark or apostrophe and capitalizes it   
                elif (string_list[i] == ' ' and string_list[i-1] == 'i' and string_list[i-2] == ' ') or (string_list[i] == '?' and string_list[i-1] == 'i' and string_list[i-2] == ' ') or (string_list[i] == '!' and string_list[i-1] == 'i' and string_list[i-2] == ' ') or (string_list[i] == '.' and string_list[i-1] == 'i' and string_list[i-2] == ' ') or (string_list[i] == '’' and string_list[i-1] == 'i' and string_list[i-2] == ' '):
                    x = i
                    for i in range(x, len(string_list)):
                            string_list[i-1] = string_list[i-1].upper()
                            break
# return the list joined as a normal string    
                    return ''.join(string_list)    

# main program that demostrates capitalize_it(s) taking a string entered by the user as a parameter
def main():
    user_input = input('Enter a string: ')
    print(capitalize_it(user_input))

# assign to __name__ value of 'name' so the program could run only if is not imported in another file 
if __name__ == '__main__':
    main()