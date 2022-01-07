from functools import partial


def letters(word):
    world_list = word.split(' ')
    new_lst = []
    for element in world_list:
        if 48 > ord(element[-1:]) > 32 or 65 > ord(element[-1:]) > 57:
            word_2 = element[:-1]
        else:
            word_2 = element
        new_lst.append(word_2)
    return new_lst

def main():
    period = input('Enter the phrase: ').lower()
    reverse = []
    for word in letters(period):
        reverse.insert(0,word)
    print(reverse)
    if letters(period) == reverse:
        print('The phrase is a palindrome!')
    else:
        print('The phrase is not a palindrome!')
if __name__ == '__main__':
    main()