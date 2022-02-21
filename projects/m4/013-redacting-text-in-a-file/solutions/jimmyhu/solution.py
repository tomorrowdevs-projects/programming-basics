import sys
import string

# Function for read a file and return a list of word without punctuation and no repeated value
def file_reader(file,list):
    try:
        with open(file, 'r', encoding='UTF-8') as data:
            for line in data:
                row = line.strip().split(' ')
                words = [word.translate(str.maketrans('','',string.punctuation)).lower() for word in row]
                for elem in words:
                    if elem not in list:
                        list.append(elem)
            return list
    except FileNotFoundError:
        print(f"File does not exist")

def radacter(banned_list,text_file):
    # create the name for the new file
    new_file_name = ''.join(text_file.split('.')[:-1]).translate(str.maketrans('','',string.punctuation)) + '_redacted'
    # open the first file for read and create a second file where write
    try:
        with open(text_file, 'r', encoding='UTF-8') as original, open(f"{new_file_name}.txt", 'w+', encoding='UTF-8') as redacted:
            for line in original:
                row = line.split(' ')
                for index,word in enumerate(row):
                    word = word.lower()
                    for banned in banned_list:
                        if banned in word or word == banned:
                            row[index] = word.replace(banned, '*'*(len(banned)))
                            continue
                # writing in the new file
                redacted.write(' '.join(row))
    except FileNotFoundError:
        print(f"File does not exist")
        
def main():
    if len(sys.argv) != 3:
        print(f"For use this program, solution.py [Forbidden word file] [text to redact]")
        print(f"Error: error of input data")
    else:
        banned_words = []
        banned_words = file_reader(sys.argv[1],banned_words)
        radacter(banned_words,sys.argv[2])
if __name__ == '__main__':
    main() 