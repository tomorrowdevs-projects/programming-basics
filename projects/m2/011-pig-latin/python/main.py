from ex_007 import only_the_words

def word_slicing(word):
    vowel = ['a', 'e', 'i', 'o', 'u']
    first_letter = word[0]

    if first_letter in vowel:
        pig_latin_word = word + 'way'
        return pig_latin_word

    else:
        for letter in word:
            index = word.index(letter)
            
            if letter in vowel:
                word_len = len(word)
                word_first_part = word[index:word_len]
                word_second_part = word[0:index]
                pig_latin_word = word_first_part + word_second_part + 'ay'
                return pig_latin_word

def into_pig_latin(input):
    
    words_list = only_the_words(input)
    pig_latin_list = []

    for word in words_list:

        pig_latin_word = word_slicing(word)
        pig_latin_list.append(pig_latin_word)

    pig_latin_str = ' '.join(pig_latin_list)
    return pig_latin_str

if __name__ == '__main__':
    print('Hello USER this program will translate your string in pig latin')
    user_input = input('Enter the sentence to translate: ')

    print(into_pig_latin(user_input))