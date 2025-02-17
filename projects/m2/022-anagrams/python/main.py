def anagram(first_string, second_string):
    """Returns true and a dictionary containing the characters if the strings are anagrams."""
    first_string, second_string = first_string.lower(), second_string.lower()
    char_first_string = {}
    char_second_string = {}

    for character in first_string:
        if character not in char_first_string:
            char_first_string[character] = 1
        else:
            char_first_string[character] += 1
    for character in second_string:
        if character not in char_second_string:
            char_second_string[character] = 1
        else:
            char_second_string[character] += 1
    for char in char_first_string:
        if char not in char_second_string or char_first_string[char] != char_second_string[char]:
            return False
    return (True, char_first_string)

if __name__ == "__main__":
    first_word = input("Enter the first word: ")
    second_word = input("Enter the second word: ")
    characters = anagram(first_word, second_word)
    if characters:
        print("{} and {} are anagrams. Both contain: {}".format(first_word, second_word, characters[1]))
    else: 
        print("{} and {} are not anagrams.".format(first_word, second_word))