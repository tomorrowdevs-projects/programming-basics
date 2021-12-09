
#create a program that reads a letter of the alphabet from the user
vowel = 'aeiou'
letter_user = input('Insert a letter of the alphabet: ')

#if a,e,i,o,u display that the entered letter is a vowel
if letter_user in vowel:
    print('The letter is a vowel.')

# If y display that sometimes y is a vowel, and sometimes y is a consonant.
elif letter_user == 'y':
    print('Sometimes y is a vowel, and sometimes y is a consonant.')

#Otherwise display that the letter is a consonant.
else:
    print('The letter is a consonant.')