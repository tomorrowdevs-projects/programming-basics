def unique_char(string):
    unique = set(string)
    number = len(unique)
    return(number)

def main():
    user_string = input("Enter a string: ")
    print(("'{}' has {} unique characters.") .format(user_string,unique_char(user_string)))

if __name__ == "__main__":
    main()