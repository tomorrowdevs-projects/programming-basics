def capitalize_it(string: str) -> str:
    '''
    Returns a new copy of the string that has been correctly capitalized
    It capitalizes:
    - the first non-space character in the string,
    - the firstnon-space character after a period, exclamation mark or question mark
    - a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.
    - last "i" personal pronouns in a sentence
    '''
    capitalized_string=""

    stop_period_marks=".!?"
    continue_period_marks=" ':,’"

    string = string.strip()

    for char in range(0,len(string)):
        if char == 0:
            capitalized_string += string[char].upper()
        elif string[char-1] in stop_period_marks:
            capitalized_string += string[char].upper()
        elif string[char-1]==" " and char-2 >= 0 and string[char-2] in stop_period_marks:
                  capitalized_string += string[char].upper()
        elif char == (len(string)-1) and string[char] == "i" and string[char-1] in stop_period_marks+continue_period_marks:
                    capitalized_string += string[char].upper()
        elif char < len(string)-1:
                if string[char]=='i' and string[char-1]==" " and string[char+1] in stop_period_marks + continue_period_marks:
                    capitalized_string += string[char].upper()
                else:
                    capitalized_string += string[char]

    return capitalized_string

if __name__=="__main__":
     string = input("Insert a string that you want to capitalize it: ")
     print("--------")
     print(capitalize_it(string))