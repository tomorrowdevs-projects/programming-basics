first_string = input('Enter the first word: ')
second_string = input('Enter the second word: ')

def count_characters_first_string(first_string):

    count_characters_first_string = dict()

    for character in first_string.lower():
        if character not in count_characters_first_string:
            count_characters_first_string[character] = 1
        else:
            count_characters_first_string[character] += 1

    return count_characters_first_string

def count_characters_secon_string(second_string):

    count_characters_second_string = dict()

    for character in second_string.lower():
        if character not in count_characters_second_string:
            count_characters_second_string[character] = 1
        else:
            count_characters_second_string[character] += 1

    return count_characters_second_string

def are_an_anagrams():
    if count_characters_first_string(first_string) == count_characters_first_string(second_string):
        print(f'{first_string} and {second_string} are anagrams')
    else:
        print(f"{first_string} and {second_string} aren't anagrams")
    

