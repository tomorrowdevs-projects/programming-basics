def remove_duplicate(words, unique_words):
    for word in words:
        if word not in unique_words:
            unique_words.append(word)
        else:
            continue
    return unique_words

def main():
    words = []
    unique_words = []
    while True:
        user_word = input("Enter a word(blank for exit): ")
        if user_word == " ":
            remove_duplicate(words, unique_words)
            for word in unique_words:
                print(word)
            break
        else:
            words.append(user_word)


if __name__ == "__main__":
    main()