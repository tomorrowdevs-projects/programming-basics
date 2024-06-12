def remove_duplicates(original_list):
    """Takes a list, returns a new list without duplicates."""
    new_list = []
    for string in original_list:
        if string not in new_list:
            new_list.append(string)
    return new_list

def main():
    entered_words = []
    user_word = input("Enter a word (blank to quit): ").strip()
    while user_word != "":
        entered_words.append(user_word)
        user_word = input("Enter a word (blank to quit): ")
    no_duplicates = remove_duplicates(entered_words)
    print(no_duplicates)

if __name__ == "__main__":
    main()