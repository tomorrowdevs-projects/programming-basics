def is_palindrome(word):
    return word == word[::-1]

word = input("Enter a word: ")  
if is_palindrome(word) == True:
    print(f'"{word}" is palindrome.')
else: 
    print(f'"{word}" is not palindrome.')