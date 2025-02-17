import sys
import string

def repeat_word_checker(file):
    try:
        count = 1
        last_word = ''
        with open(file, 'r', encoding='UTF-8') as data:
            for line in data:
                row = line.strip().split(' ')
                #formatting all the word in lower without punctuation
                words = [word.translate(str.maketrans('','',string.punctuation)).lower() for word in row]
                for word in words:
                    if word == last_word:
                        return f"repeated word at line {count} Word: {word}"
                    last_word = word
                count += 1
        return "No repeated words"
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution.py [FILE_1 path]")
        print(f"Error: error of input data")
    else:
        print(repeat_word_checker(sys.argv[1]))
if __name__ == '__main__':
    main() 