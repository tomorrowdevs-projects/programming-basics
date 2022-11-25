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
            else: temp_string += character
        else: temp_string += character
    extracted_words = temp_string.split()
    return (extracted_words)

def main():
    user_string = input("Enter a phrase: ")
    print (only_words(user_string))

if __name__ == "__main__":
    main()