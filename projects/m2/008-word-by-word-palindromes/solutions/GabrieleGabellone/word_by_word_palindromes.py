def only_words(string):
    """Takes a string, returns a list with the extracted words without punctuation marks."""
    puntation_marks = [",", ".", "?", "-", "’", "!", ":", ";"]
    temp_string = ""
    for character in string:
        if character in puntation_marks:
            if string.index(character) == len(string) - 1:
                continue
            if string[(string.index(character) + 1)] == " ":
                continue
            else: temp_string += character.lower()
        else: temp_string += character.lower()
    extracted_words = temp_string.split()
    return (extracted_words)

def palindrome_list(original_list):
    """Takes a list, if the list is a palindrome it returns true otherwise it returns false."""
    reverse_list = []
    i = len(original_list) - 1
    while i >= 0:
        reverse_list.append(original_list[i])
        i -= 1
    if original_list == reverse_list: 
        return (True)
    else: return (False)

def main():
    user_phrase = input("Enter a phrase: ")
    words_in_phrase = (only_words(user_phrase))
    if palindrome_list(words_in_phrase) == True:
        print ("The entered phrase is a word by word palindrome.")
    else: print ("The entered phrase isn't a word by word palindrome.")

if __name__ == "__main__":
    main()