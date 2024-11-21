def only_words(str):

    splitted = str.split()
    return [words.strip("?!.,':-"";/") for words in splitted]

def is_palindrome(sen):

    words_no_pun = only_words(sen)

    palindrome = words_no_pun[::-1]

    if words_no_pun == palindrome:
        return True
    else:
        return False

def main():
    user = input("Enter a sentence which you think is a palindrome:")
    if is_palindrome(user):
        print("Your sentence is a Palindrome")
    else:
        print("Your sentence is not a Palindrome")
        
        
if __name__ in "__main__":
    main()

if __name__ in "__main__":
    main()