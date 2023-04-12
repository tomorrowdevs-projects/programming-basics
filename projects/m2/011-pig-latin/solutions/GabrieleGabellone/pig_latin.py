def check_string(string):
    allowed_characters = "abcdefghijklmnopqrstuwxyz "
    for character in string:
        if character not in allowed_characters:
            print("Only strings with lowercase letters and spaces are allowed!")
            return False
    return True

def translator(string):
    vowel = "aeiou"
    translated_words = []
    extracted_words = string.split()
    for word in extracted_words:
        if word[0] in vowel:
            new_word = word + "way"
            translated_words.append(new_word)
        else:
            i = 0
            first_letters = ""
            while word[i] not in vowel:
                first_letters += word[i]
                i += 1
            new_word = word[i:] + first_letters + "ay"
            translated_words.append(new_word)
    delimiter = " "
    translated_string = delimiter.join(translated_words)
    return translated_string

def main():
    user_phrase = input("Enter a phrase to translate into pig latin: ")
    if check_string(user_phrase):
        translated_phrase = translator(user_phrase)
        print(translated_phrase)

if __name__ == "__main__":
    main()