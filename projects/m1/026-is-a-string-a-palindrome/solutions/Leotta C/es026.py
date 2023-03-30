word = input("Enter a word: ")
if word == word[::-1]:
    print(f"The word '{word}' is a palindrome, because '{word}' and '{word[::-1]}' are the same word.")
else:
    print(f"The word '{word}' is not a palindrome, because '{word}' and '{word[::-1]}' are different words.")
