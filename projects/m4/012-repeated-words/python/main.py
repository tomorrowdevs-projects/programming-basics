def check_punctuation_edge(s: str) -> str:
    '''
    remove any punctuation at the start and at the end of the string and return it    
    '''

    output_string = s

    if not s[0].isalpha():
        output_string = output_string[1:]
    if not s[-1].isalpha():
        output_string = output_string[:-1]

    return output_string


import sys

try:

    f = open(sys.argv[1],"r")

    lines = f.read().splitlines()
    last_word = ""

    #index is the index of line in file f
    index = 0

    while index < len(lines):

        #create a words list contained in a line
        words_in_line = lines[index].split()

        #if the line isn't empty
        if len(words_in_line) != 0:

            #memorize the first word as current word without any punctuation at the edge and in uppercase
            current_word = check_punctuation_edge(words_in_line[0].strip().upper())

            #This if is to check the case of a repeated word between two different lines
            if last_word == current_word:
                print(f"Attention repeated word. Line {index+1} - word {current_word}")

            last_word = current_word

            #index_words is the index of the words list of that line
            index_words = 1
            
            while index_words < len(words_in_line):
                current_word = check_punctuation_edge(words_in_line[index_words].strip().upper())
                
                if last_word == current_word:
                    print(f"Attention repeated word. Line {index+1} - word {current_word}")

                index_words +=1
                last_word = current_word

        index +=1
            

    f.close()

except FileNotFoundError: 
    print("File not founded")
except IndexError:
    print("File name arg omitted")

