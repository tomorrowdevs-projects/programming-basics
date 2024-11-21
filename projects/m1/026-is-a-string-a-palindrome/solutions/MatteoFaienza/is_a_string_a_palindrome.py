# This program tells if a word is palindrome
user_word =input('Enter a word: ')

start_letter = 0
finish_letter = -1
user_word_palindrome_or_not = ''

for letter in user_word :

    if user_word[start_letter] == user_word[finish_letter] :
        start_letter += 1
        finish_letter -= 1
        user_word_palindrome_or_not = user_word + ' is palindrome'

    else :
        user_word_palindrome_or_not = user_word + " isn't palindrome" 
        break

print ('The word',user_word_palindrome_or_not) 