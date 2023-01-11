def capitalize_string(s): 
    #Capitalize first non-space character 
    for i in range(0,len(s)):
        if s[i] != " ":
            s = s[:i] + s[i].upper() + s[i+1:]
            break

    for i in range(0,len(s)):

        #Capitalize the first non-space character after a period, exclamation mark or question mark
        capitalize_after = [".", "!", "?"]
        capitalize_i = [" ", ".", "!", "?", "'", "`"]
        if s[i] in capitalize_after:   
            for i in range(i+1,len(s)):                
                if s[i] != " ":
                    s = s[:i] + s[i].upper() + s[i+1:]
                    break

        #Capitalize a lowercase “i”
        if s[i-1] == " " and s[i] == "i" and s[i+1] in capitalize_i:
            s = s[:i] + s[i].upper() + s[i+1:]
    
    return(s)

def main():
    user_s = input("Enter a string: ")
    print(capitalize_string(user_s))

if __name__ == "__main__":
    main()
