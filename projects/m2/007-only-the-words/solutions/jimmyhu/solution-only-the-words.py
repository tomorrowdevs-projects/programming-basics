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
    period = input('Enter here the phrase: ')
    print(letters(period))


if __name__ == '__main__':
    main()