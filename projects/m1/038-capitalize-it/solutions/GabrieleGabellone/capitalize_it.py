# The function capitalize takes a string as its only parameter and returns a new copy of the string that has been correctly capitalized.
# In particular: • Capitalize the first non-space character in the string • Capitalize the firstnon-space character after a period, exclamation mark or question mark
# and • Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.

def capitalize(string):
    character_after_i = [" ", ".", "!", "?", "’"]
    punctuation_marks = []
    # In this step I'm going to replace every "i" between a space and a character indicated in the "character_after_i" list with a capital "i" 
    for character in character_after_i:
        temp_string = string.replace(" i" + character, " I" + character )
        l = list(temp_string)
        string = "".join(l)
    # In this step I'm going to save in an empty list all the indices of the punctuation marks present in the string 
    i = 0
    while i < len(string):
        if string[i] == "." or string[i] == "!" or string[i] == "?": 
            punctuation_marks.append(i)
        i += 1
    # In this step, I go to get the indexes saved previously, and for each index, i go to replace the next character with a capital letter
    for index in punctuation_marks:
        next_c = index + 1 # With next_c I refer to the index of the character following the punctuation mark
        if next_c < len(string): # I first check that it is not the last character of the string       
            while string[next_c] == " ": # Then, I check that the next character is not a space, otherwise I increase the index
                next_c += 1
            temp_string = string[:next_c] + string[next_c].upper() + string[next_c + 1:]
            l = list(temp_string)
            string = "".join(l)
    # Finally I make the initial letter capitalized
    i = 0
    while string[i] == " ":
        i += 1
    new_string = string[:i] + string[i].upper() + string[i+1:]
    return(new_string)

def main ():
    user_string = input("Enter a string: ")
    print(capitalize(user_string))

if __name__ == "__main__":
    main()