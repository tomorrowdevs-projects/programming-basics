word=input("Enter string to check if is palindrome: ")

reverseword=""

for index in range(len(word)-1, -1, -1):
    reverseword+=word[index]
    
print(reverseword)
if word==reverseword:
    print(f"{word} is palindrome!")
else:
    print(f"{word} is not palindrome!")