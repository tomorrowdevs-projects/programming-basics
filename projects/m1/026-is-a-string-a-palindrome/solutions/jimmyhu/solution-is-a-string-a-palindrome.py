word = input('enter the word: ').lower()
counter = [];
for letter in word:
    counter.insert(0, letter)
if ''.join(counter) == word:
    print('the word is a palindrome')
else:
    print('the word is not a palindrome')
