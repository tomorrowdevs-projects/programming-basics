
import string
consonant = list(string.ascii_lowercase)

request = input('Enter a letter').lower()
if request[0] in 'aeiou':
     print('Is a vowel')
elif request[0] == 'y':
     print('Sometimes is a vowel and sometimes no')
elif request[0] in consonant:
     print('it\'s a consonant')
else:
     print('error')