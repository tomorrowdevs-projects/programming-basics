print('Hello USER this program will determine if your input word is a palindrome or not')
word = input('Insert the word to check: ')

word = word.lower()

if word == word[::-1]:
    print(f'{word} is a palindrome')
else:
    print(word, '!=', word[::-1])
    print(word, 'is not a palindrome')