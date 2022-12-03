def is_anagram(first_string, second_string):
    """Returns true and a dictionary containing the characters if the strings are anagrams."""
    char_first_string = {}
    char_second_string = {}
    for character in first_string:
        if character.lower() not in char_first_string:
            char_first_string[character.lower()] = 1
        else:
            char_first_string[character.lower()] += 1
    for character in second_string:
        if character.lower() not in char_second_string:
            char_second_string[character.lower()] = 1
        else:
            char_second_string[character.lower()] += 1
    for k in char_first_string:
        if k not in char_second_string or char_first_string[k] != char_second_string[k]:
            return False
    return (True, char_first_string)

def main():
    first_word = input("Enter the first word: ")
    second_word = input("Enter the second word: ")
    if is_anagram(first_word, second_word) != False:
        characters = is_anagram(first_word, second_word)[1]
        print ("{} and {} are anagrams. Both contain: {}".format(first_word, second_word, characters))
    else: print ("{} and {} are not anagrams.".format(first_word, second_word))

if __name__ == "__main__":
    main()