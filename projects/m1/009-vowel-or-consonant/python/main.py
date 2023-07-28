# ask to user a letter, store in a variable and make it lowercase
letter = input('Type a letter:\n').lower()

# compare the given letter to define if it is a vowel or a consonant and print result on screen
if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
    print('"' + letter.upper() + '"' + ' is a vocals')
elif letter == 'y':
    print('"Y" sometimes is used as a consonant, sometimes as a vocal')    
else:
    print('"' + letter.upper() + '"' + ' is a consonant')
