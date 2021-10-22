word = input("Enter word: ")
reverse_word = ""

for letter in word[::-1]:
    reverse_word += letter
print(reverse_word)
if word.lower() == reverse_word.lower():
    print(f"{word} is a palindrome")
else:
    print(f"{word} isn't a palindrome")
