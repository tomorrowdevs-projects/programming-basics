def only_words(string: "str")-> list:
    """Takes a string, returns a list with the extracted words."""
    temp_string = ""
    character_index = 0

    for character in string:
        # Removing all non-alpha characters except apostrophes used for contractions and spaces
        if not character.isalpha():
            if character == "’" or character == " ":
                if character_index == len(string) - 1:
                    character_index += 1
                    continue
                if string[character_index + 1] == " ":
                    character_index += 1
                    continue
            else:
                character_index += 1
                continue
        temp_string += character.lower()
        character_index += 1

    extracted_words = temp_string.split()
    return extracted_words


if __name__ == "__main__":
    user_string = input("Enter a phrase: ")
    print(only_words(user_string))