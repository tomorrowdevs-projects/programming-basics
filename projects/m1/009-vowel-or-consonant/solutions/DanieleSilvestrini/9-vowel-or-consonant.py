# letter = input("Insert a letter:\n")
# import re

# def vowel_or_consonant(letter):
#     if not re.match("^[a-z]+$", letter):
#         print('Invalid character')
#     elif letter == 'a':
#         print("it's a vowels")
#     elif letter == 'e':
#         print("it's a vowels")
#     elif letter == 'i':
#         print("it's a vowels")
#     elif letter == 'o':
#         print("it's a vowels")
#     elif letter == 'u':
#         print("it's a vowels")
#     elif letter == 'y':
#         print("sometimes is used as vowels, sometimes as a consonant")
#     else:
#         print("it's a consonant")
    
# vowel_or_consonant(letter)


vocals = ['a', 'e', 'i', 'o', 'u']

import re

def find_letter():
    letter = input('Type a letter:\n')
    if not re.match("^[a-z]+$", letter):
            print('Invalid character')
            find_letter()
    if letter in vocals:
        print('"' + letter.upper() + '"' + ' is a vocals')
        find_letter()
    elif letter == 'y':
        print('"Y" sometimes is used as a consonant, sometimes as a vocal')
        find_letter()
    else:
        print('"' + letter.upper() + '"' + ' is a consonant')
        find_letter()
        
find_letter()
