def check_characters(entered_message):
    allowed_characters = ".,?!:ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    for character in entered_message:
        if character not in allowed_characters:
            return print("The character '{}' is not present in the numeric keypad!".format(character)) 
    return True

def text_messaging(entered_message):
    numeric_keypad = {"1":".,?!:", "2":"ABC", "3":"DEF", "4":"GHI", "5":"JKL", "6":"MNO", "7":"PQRS", "8":"TUV", "9":"WXYZ", "0":" "}
    new_message = ""
    for character in entered_message:
        for number in numeric_keypad:
            if character in numeric_keypad[number]: 
                new_character = number * (numeric_keypad[number].index(character) + 1)
                new_message += new_character
    return new_message

def main():
    user_message = input("Enter a message: ").upper()
    if check_characters(user_message):
        print(text_messaging(user_message))

if __name__ == "__main__":
    main()