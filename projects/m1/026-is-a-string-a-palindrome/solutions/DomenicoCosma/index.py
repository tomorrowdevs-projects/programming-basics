
word = input('Enter a word to know if is palindrome or no').lower()
if str(word) == str(word)[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")