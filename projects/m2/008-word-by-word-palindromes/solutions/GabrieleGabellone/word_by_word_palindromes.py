from solution_only_the_words import only_words

def is_palindrome(item):
    """Returns True if the item is a palindrome"""
    i = len(item) - 1
    if type(item) == str:
        reverse_string = ""
        while i >= 0:
            reverse_string += item[i]
            i -= 1
        if item == reverse_string:
            return True

    elif type(item) == list:
        reverse_list = []
        while i >= 0:
            reverse_list.append(item[i])
            i -= 1
        if item == reverse_list: 
            return True


if __name__ == "__main__":
    user_phrase = input("Enter a phrase: ").lower()
    words_in_phrase = (only_words(user_phrase))
    if len(words_in_phrase) == 1:
        if is_palindrome(words_in_phrase[0]):
            print("The entered word is a palindrome.")
        else:
            print("The entered word isn't a palindrome.")
    else:
        if is_palindrome(words_in_phrase):
            print("The entered phrase is a word by word palindrome.")
        else: 
            print("The entered phrase isn't a word by word palindrome.")