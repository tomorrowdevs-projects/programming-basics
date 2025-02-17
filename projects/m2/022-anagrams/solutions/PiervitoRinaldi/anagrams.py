import unique_characters    # This program will use only the function "count_characters" from the module unique_characters

def are_an_anagrams(first_string, second_string):
    if unique_characters.count_characters(first_string) == unique_characters.count_characters(second_string):
        print(f'{first_string} and {second_string} are anagrams!')
    else:
        print(f"{first_string} and {second_string} aren't anagrams!")

def main():
    first_string = input('Enter the first word: ')
    second_string = input('Enter the second word: ')
    are_an_anagrams(first_string, second_string)

main()

