
def mirror(text):
    for char in range(len(text) - 1, -1, -1):text += text[char]
    return text[len(text)//2:len(text)]

def isPalindrome(text):
    return True if text == mirror(text) else False


text = 'hello'
print(f'\ntext is {text}')
print(f'mirror text is {mirror(text)}')

print(f'text is Palindrome {isPalindrome(text)}')




