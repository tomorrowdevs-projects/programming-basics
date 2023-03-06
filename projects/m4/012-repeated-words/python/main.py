import sys


def create_words_list(text):
    text = text.lower()
    for character in text:
        if character.isalpha() == False and character != ' ':
            text = text.replace(character, '')
    words_list = text.split()

    return words_list

try:
    with open(sys.argv[1], 'r') as file:
        lines_and_words = []
        lines_list = file.readlines()
        for line in lines_list:
            words_line = create_words_list(line)
            lines_and_words.append(words_line)

        for line in lines_and_words:
            i_line = lines_and_words.index(line)
            i_word = 0
            for word in line:
                if word == line[i_word - 1]:
                    msg = f'Repeated word: {word}\nRow: {i_line + 1}\n'
                    print(msg)
                i_word += 1

            if i_line < (len(lines_and_words) - 1):
                if line[len(line)-1] == lines_and_words[i_line + 1][0]:
                    msg = f'Repeated word: {lines_and_words[i_line + 1][0]}\nRow: {i_line + 2}\n'
                    print(msg)

except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")