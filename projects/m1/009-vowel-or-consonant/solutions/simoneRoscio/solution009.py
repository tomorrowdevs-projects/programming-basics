# INPUT: the program read a letter of the alphabet from user
# IF the given letter is "a, e, i, o OR u" a message indicates that the letter is a vowel
# IF the given letter is "y" a message indicates that y sometimes is a vowel sometimes is a consonant
# Otherwise indicates that the letter is a consonant

user_input = input('Give me a letter:')
user_letter = user_input[0]


if not user_input.isalpha():
    print('Just a letter allowed!')

elif len(user_input) > 1:
    print(f'You write {user_input} di you mean {user_letter}?')

elif user_letter == 'a' or user_letter == 'e' or user_letter == 'i' or user_letter == 'o' or user_letter == 'u':
    print(f'{user_letter} is a vowel')

elif user_letter == 'y':
    print(f'{user_letter} sometimes is a vowel sometimes is a consonant')

else:
    print(f'{user_letter} is a consonant')

