def string_palindrome(string):
    marks = [",",".","?","-","'","!",":",";"]
    string_list = [i.lower() for i in string.split()]
    new_string_list = []

    for index in string_list:
        if index[-1] in marks:
            index = index[0:-1]
        new_string_list.append(index)

    if new_string_list == new_string_list[::-1]:
        print("This string is a word by word palindrome.")
    else:
        print("This string isn't a word by word palindrome.")

def main():
    print("This program will display you if a string is a word by word palindrome or not.")
    user_string = input("Enter a string: ")
    string_palindrome(user_string)

if __name__ == "__main__":
    main()

