#Import alphabet list and create vowel list
import string
alphabet = (list(string.ascii_lowercase))
vowel = 'a', 'e', 'i', 'o', 'u'

#Ask the user to insert a letter and convert it in a lowercase
letters = str(input('insert a letter: '))
letters = letters.lower()

#Develop and display the output
if letters in vowel  :
    print('this letter is a vowel')
elif letters == 'y' :
    print('sometimes y is a vowel, and sometimes y is a consonant')
elif len(letters) > 1 :
    print('ERROR! you should insert just one letter')
elif letters not in alphabet :
    print('ERROR! you should insert a letter')
else :
    print('this letter is a consonant')


