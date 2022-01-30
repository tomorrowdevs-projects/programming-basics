import sys

def tail_reader(files_array):
    final= ''
    try:
        for file in files_array:
            with open(file, 'r', encoding='UTF-8') as data:
                readed = data.read(50)
                while len(readed) > 0:
                    final += readed
                    readed = data.read(50)
                final += '\n'
        return final
    except FileNotFoundError:
        print(f"File does not exist")
    
def main():
    if len(sys.argv) < 3:
        print(f"For use this program, solution-m4.py [FILE_1 path] [FILE_2 path]")
        print(f"Error: error of input data")
    else:
        print(tail_reader(sys.argv[1:]))
        
if __name__ == '__main__':
    main()