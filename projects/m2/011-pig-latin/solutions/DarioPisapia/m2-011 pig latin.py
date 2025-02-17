def pig_traslator(string):
    string = string.split(" ")
    vowel = "aeiou"
    pig_string = []
    for word in string:
        if word[0] not in vowel:
            pig = []
            pig.append(word[0])
            word = word.replace(word[0], "")
            for letter in word:
                if letter not in vowel:
                    word = word.replace(letter, "")
                    pig.append(letter)
                else:
                    break
            pig = "".join(pig)
            word = word+pig+"ay" 
            pig_string.append(word) 
        else:
            word = word+"way"
            pig_string.append(word)
    pig_string = " ".join(pig_string)
    return pig_string

if __name__ == "__main__":
    string = input("Insert here the phrase to translate. The string can only contains lowercase letters and spaces:\n")
    print(pig_traslator(string))
