def capitalize_string(s): 
    #Capitalize first non-space character   
    first = 0  
    while s[first] == " ":
        first += 1
    s1 = s[:first] + s[first].upper() + s[first+1:]

    #Capitalize the first non-space character after a period, exclamation mark or question mark
    i = 0
    while i < len(s1):
        if s1[i] == "." or s1[i] == "!" or s1[i] == "?":
            i += 1
            while i < len(s) and s1[i] == " ":
                i += 1
            if i < len(s1):
                s1 = s1[:i] + s1[i].upper() + s1[i+1:]
        i += 1
    
    #Capitalize a lowercase “i”
    i = 1
    while i < len(s1):
        if s1[i-1] == " " and s1[i] == "i" and (s1[i+ 1] == " " or s1[i+1] == "." or s1[i+1] == "!" or s1[i+1] == "?" or s1[i+1] == "'"):
            s1 = s1[:i] + s1[i].upper() + s1[i+1:]
        i += 1

    return(s1)

def main():
    user_s = input("Enter a string: ")
    print(capitalize_string(user_s))

if __name__ == "__main__":
    main()
