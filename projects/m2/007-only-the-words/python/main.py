def only_words(string):
    marks = [",",".","?","-","'","!",":",";"]
    string_list = string.split()
    new_string_list = []

    for index in string_list:
        if index[-1] in marks:
            index = index[0:-1]
        new_string_list.append(index)
    
    print(*new_string_list)
    

def main():
    print("This program will display you a string with the puctuation marks removed.")
    user_string = input("Enter a string: ")
    only_words(user_string)

if __name__ == "__main__":
    main()