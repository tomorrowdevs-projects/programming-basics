import sys
import string

letters = {}

def letter_counter(files_array,dict):
    try:
        for file in files_array:
            with open(file, 'r', encoding='UTF-8') as data:
                readed = data.read(1)
                while len(readed) > 0:
                    if readed.lower() in string.printable[10:36]:
                        if readed not in dict:
                            dict[readed] = 1
                        else:
                            dict[readed] += 1
                    readed = data.read(1)
        most = max(dict, key=lambda x: dict[x])
        return f"Most Frequent letter: \'{most.upper()}\' used {dict[most]}"
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) < 1:
        print(f"For use this program, solution-m4-3.py [FILE_1 path] ...")
        print(f"Error: error of input data")
    else:
        print(letter_counter(sys.argv[1:],letters))

if __name__ == '__main__':
    main() 