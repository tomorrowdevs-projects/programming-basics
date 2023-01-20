def unique_characters(string):
    """Takes a string, returns the number of unique characters in it."""
    characters = set(string)
    return len(characters)

def main():
    user_string = input("Enter a string: ")
    print("The entered string has {} unique characters.".format(unique_characters(user_string)))

if __name__ == "__main__":
    main()