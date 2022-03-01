import sys
import string

words_dict = {}

def letter_counter(files_array,dict):
    try:
        for file in files_array:
            with open(file, 'r', encoding='UTF-8') as data:
                for row in data:
                    line_strip = row.strip()
                    words = line_strip.split(' ')
                    for word in words:
                        new_word = word.translate(str.maketrans('','',string.punctuation)).lower()
                        if new_word not in dict:
                            dict[new_word] = 1
                        else:
                            dict[new_word] += 1
        most = max(dict, key=lambda x: dict[x])
        return f"Most Frequent letter: \'{most}\' used {dict[most]}"
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) < 1:
        print(f"For use this program, solution-m4-5.py [FILE_1 path] ...")
        print(f"Error: error of input data")
    else:
        print(letter_counter(sys.argv[1:],words_dict))

if __name__ == '__main__':
    main()  