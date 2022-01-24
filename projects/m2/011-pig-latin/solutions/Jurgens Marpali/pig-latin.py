def pig_latin(sent):
    vowels = "aeiou"
    consonant = 'bcdfghjklmnpqrstvwxyz'

    word_start = sent.split()
    translated_words = []

    for word in word_start:

        if word[0] in vowels:

            word += 'way'
            translated_words.append(word)
        
        else:
                l_char = list(word)
                i = 0
                while i <= len(l_char):
                    if l_char[0] in consonant:
                        char = l_char.pop(0)
                        l_char.append(char)
                        i += 1
                    else:
                        break
                l_char.append('ay')
                pig_lat_word = ''.join(l_char)
                translated_words.append(pig_lat_word)
                return translated_words
                    
            

def main():

    user = input("Insert an english sentence to translate in pig latin: ")
    print(pig_latin(user))


if __name__ == "__main__":
    main()


