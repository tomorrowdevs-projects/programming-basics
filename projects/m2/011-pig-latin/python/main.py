def pig_latin_translation(string_in:str) -> str:
    
    words = string_in.split(" ")

    vowels = "aeiou"

    index = 0
    for index in range(len(words)):
        word = words[index]
        if word[0] in vowels:
            word += "way"
        else:
            suffix = ""
            while len(word)>0 and word[0] not in vowels:
                suffix += word[0]
                word = word[1:]
            suffix += "ay"
            word += suffix
        words[index] = word

    out_string = ""
    for word in words:
        out_string += word + " "
    return out_string

string = input("Insert a string. I'll translate into pig latin ")
print(pig_latin_translation(string))
               
