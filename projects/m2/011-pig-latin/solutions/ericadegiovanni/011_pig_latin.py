

def english_to_pig_latin(sentence):
    vowels = 'aeiou'

    # recieve a string
    # translate the line into Pig Latin and return the result. 

    # split the sentence in a list
    starting_words = sentence.split()
    translated_words = []

    for word in starting_words:

        #  if the word starts with a vowel add 'way' at the end of it
        if word[0] in vowels:
            word += 'way'
            translated_words.append(word)
        
        # else remove all the letters from the beginning up to the firsrt vowel (no y)
        # add them to the end of the word
        else:
            for letter in word:
                    if letter in vowels:
                        vowel_index = word.find(letter)
                        sliced_letters = word[:vowel_index] + 'ay'
                        sliced_word = word[vowel_index:]
                        translated_words.append(sliced_word + sliced_letters)
                        break

    translated_sentence = ' '.join(translated_words)
    return translated_sentence
            
def main():
    
    # Read a line of text from the user. 
    # Then your program should translate the line into Pig Latin and display the result. 
    strarting_sentence = input('Insert a text to translate: ')
    print(english_to_pig_latin(strarting_sentence))

if __name__ == '__main__':
    main()