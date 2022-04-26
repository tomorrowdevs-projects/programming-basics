
#program that determines and displays the number of unique characters in a string entered by the user.

characters = {}

text = list(input('Enter a text to know how many unique characters has that string'))

for x in text:                               #in the dictionary we cannot have the same key so if the user will enter a double letter the sistem will append only one character.
    characters[x] = 0                        #so we can check the unique characters by the length of the dictionary

if len(characters) == 1:
    print('Your string has only one unique character.')
elif len(characters) == 0:
    print('You didn\'t enter a string')
else:
    print('Your string has:', len(characters),'characters')