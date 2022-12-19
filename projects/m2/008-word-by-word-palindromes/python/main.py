from only_the_words import only_the_words

def word_by_word_palindrome(input):
    lower_input = input.lower()
    no_punct_list = only_the_words(lower_input)
    list_len = len(no_punct_list) - 1
    index = 0

    while list_len != 0:

        if no_punct_list[index] == no_punct_list[list_len]:
            index += 1
            list_len -= 1

        else:
            print('Your sentence is not a palindrome')
            return

    print('Your string is a word by word palindrome')

if __name__ == '__main__':

    print('Hello USER, this program will determinate if a sentence is a word by word palindrome')
    user_input = input('Enter your sentence: ')

    word_by_word_palindrome(user_input)