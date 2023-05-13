def separation(string):
    lst = string.split(sep=" ")
    return [word[:-1] if word[-1] in ",.:;-!?'" else word for word in lst]


def palindrome(lst):
    for i in range(len(lst) // 2):
        if words[i].lower() != words[len(lst) - 1 - i].lower():
            return False
    return True


s = input("Enter a string: ")
words = separation(s)
if palindrome(words):
    print("Your string is a word by word palindrome.")
else:
    print("Your string is not a word by word palindrome.")

