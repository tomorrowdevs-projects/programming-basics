import sys
import string

def letter_counter(file,diction):
    total = 0
    for x in string.ascii_lowercase:
        diction[x] = 0
    try:
        with open(file, 'r', encoding='UTF-8') as data:
            readed = data.read(100)
            while len(readed) > 0:
                line = readed.strip()
                words = line.split(' ')
                for element in words:            
                    for letter in element:
                        if letter in string.ascii_lowercase:
                            diction[letter] += 1
                            total += 1
                readed = data.read(100)
        return diction,total
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution-m4-8.py [FILE_1 path]")
        print(f"Error: error of input data")
    else:
        letters = {}
        letters = letter_counter(sys.argv[1],letters)[0]
        total = letter_counter(sys.argv[1],letters)[1]
        for key in letters:
            letters[key] = (letters[key] / total) * 100
        less_used = min(letters, key=lambda x: letters[x])
        print(f"{letters} \nthe less used letter is {less_used}: {letters[less_used]:.2f}%")
if __name__ == '__main__':
    main() 