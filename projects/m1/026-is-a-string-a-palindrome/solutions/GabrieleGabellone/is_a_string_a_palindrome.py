# Is a String a Palindrome?
# this program reads a string from the user and uses a loop to determine wheter or not it is a palindrome
word = input("Enter a word: ")
reverse_word = ""
index = -1
for character in word:
    reverse_word = reverse_word + word[index]
    index -= 1
if word == reverse_word: print(word, "is a palindrome")
else: print(word, "is not a palindrome")