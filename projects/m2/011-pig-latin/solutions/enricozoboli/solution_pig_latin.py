string = input("Enter a phrase: ")
vowels = "aeiou"
consonant_plus_y = "bcdfghjklmnpqrstvwxyz"
word_list = string.split()
pig_lat_list =[]
for word in word_list:
    pig_lat_word = ""
    if word[0] in vowels:
        pig_lat_word += word + "way"
        pig_lat_list.append(pig_lat_word)
    else:
        list_of_char = list(word)
        i = 0
        while i <= len(list_of_char):
            if list_of_char[0] in consonant_plus_y:
                char = list_of_char.pop(0)
                list_of_char.append(char)
                i += 1
            else:
                break
        list_of_char.append("ay")
        delimiter = ""
        pig_lat_word = delimiter.join(list_of_char)
        pig_lat_list.append(pig_lat_word)
delimiter = " "
pig_lat_text = delimiter.join(pig_lat_list)
print(pig_lat_text)