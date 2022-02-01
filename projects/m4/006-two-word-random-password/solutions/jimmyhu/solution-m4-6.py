import sys
import string
import random

def letter_counter(file):
    try:
        head = ''
        tail = ''
        storage = []
        with open(file, 'r', encoding='UTF-8') as data:
            for line in data:
              storage.append(line.strip())  
            while not tail:
                row = random.choice(storage)
                word = random.choice(row.split(' ')).translate(str.maketrans('','',string.punctuation))
                if 7 >= len(word) >= 3:
                    if not head:
                        head = word
                    elif 8 <=(len(head) + len(word)) <= 10:
                        tail = word
            return f"{head.capitalize()}{tail.capitalize()}"
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution-m4-6.py [FILE_1 path]")
        print(f"Error: error of input data")
    else:
        print(letter_counter(sys.argv[1]))

if __name__ == '__main__':
    main()   