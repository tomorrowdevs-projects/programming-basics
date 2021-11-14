letter = input('plese insert a letter: ')
vowel = ('a','e','i','o','u')
def classification (x):
    if x in vowel:
    # if x == 'a' or x == 'e' or x == 'i' or x == 'o' or x == 'u':
        print('the letter is a vowel')
    elif x == 'y':
        print('sometimes y is a vowel, and sometimes y is a consonant')
    else:
        print('the letter is a consonant')
classification(letter)