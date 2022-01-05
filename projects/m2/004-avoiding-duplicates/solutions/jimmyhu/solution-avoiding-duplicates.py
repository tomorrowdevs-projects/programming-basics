def main():
    checker = []
    while True:
        new_word = input('Enter a word: ')
        if new_word == ' ':
            break
        elif new_word not in checker:
            checker.append(new_word)
    for element in checker:
        print(element)


if __name__ == '__main__':
    main()