letter = str(input('Please enter a letter: '))
vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
if letter.isdigit() == True:
    print('Error. You have entered a number.')
elif letter in vowel: 
    print('Your letter is a vowel')
elif letter == 'y' or letter == 'Y':
    print('Sometimes y is considered a vowel, sometimes is considered a consonant.')
else:
    print('Your letter is a consonant.')
