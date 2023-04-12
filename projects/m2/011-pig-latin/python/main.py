def pig_latin(txt):
    vowels = ["a","e","i","o","u"]
    txt_split = txt.split()
    translated_txt = []

    for index in txt_split:
        if index[0] in vowels:
            index = index + "way"
            translated_txt.append(index)
        else:
            for i in range(len(index)):
                if index[i] in vowels:
                    index = index[i:] + index[0:i] + "ay"
                    translated_txt.append(index)
                    break
    
    print(*translated_txt)

def main():
    print("This program will translated a text in pig latin.")
    print("Enter only lowercase letters and spaces if you want this program working correctly.")
    user_txt = input("Enter a text to translate: ")
    user_txt.lower()
    pig_latin(user_txt)

if __name__ == "__main__":
    main()