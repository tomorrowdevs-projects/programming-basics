def only_words(string):
    """Takes a string, returns a list with the extracted words without punctuation marks."""
    punctuation_marks = [",", ".", "?", "-", "’", "!", ":", ";"]
    temp_string = ""
    for character in string:
        if character in punctuation_marks:
            if string.index(character) == len(string) - 1:
                continue
            if string[(string.index(character) + 1)] == " ":
                continue
            # punctuation marks in the middle of a word are now also removed, except for apostrophes used to form a contraction
            if not character == "’":
                continue 
        temp_string += character
    extracted_words = temp_string.split()
    return extracted_words

if __name__ == "__main__":
    user_string = input("Enter a phrase: ")
    print(only_words(user_string))