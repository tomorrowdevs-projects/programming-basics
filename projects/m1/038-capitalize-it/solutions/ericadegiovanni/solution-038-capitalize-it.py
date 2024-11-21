# create a function that takes a string as its only parameter 
# returns a new string correctly capitalized.  

def string_capitalize(str):  

    # Capitalize the first non-space character in the string
    str = str.lstrip().capitalize() 

    new_str = ''
    i = 0
    while i < len(str):
    
        # capitalize 'i'
        if str[i] == 'i' and str[i - 1] == ' ':
             if (str[i + 1] == ' ' or 
             str[i + 1] == "'" or
             str[i + 1] == '?' or
             str[i + 1] == '!' or
             str[i + 1] == '.'):
                new_str += str[i].upper()
             else:
                new_str += str[i]  

        # Capitalize the first non-space character after a period, exclamation mark or question mark
        elif str[i - 1] == ' ':
            space = i - 1
            while True:
                space -= 1
                if (str[space] == '.' or
                  str[space] == '!' or
                  str[space] == '?'):
                    new_str += str[i].upper()
                    break
                elif str[space] == ' ':
                    continue
                else:
                    new_str += str[i]   
                    break         
        else:
            new_str += str[i]   
        i = i + 1  
    return new_str
        
def main():
    user_string = input('Insert a string: ')
    new_string = string_capitalize(user_string)
    print(f'String with the correct capitalization: {new_string}.')

if __name__ == '__main__':
    main()

