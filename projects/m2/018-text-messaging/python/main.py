def text_messaging(text):
    text = text.lower()
    result = ""
    symbols = {
        "1": [".", ",", "?", "!", ":"],
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"],
        "0": [" "]    #space    
    }
    for char in text:
        for key in symbols:
            if char in symbols[key]:
                result += key * (1 + (symbols[key].index(char)))    # how many times the key is pressed in order to obtain a certain symbol/character
    
    return(result)
            
def main():
    user_text = input("Enter a text message: ")
    answer = "Key presses needed for this text message:"
    print(answer,text_messaging(user_text))

if __name__ == "__main__":
    main()