import sys

def tenline_reader(file):
    final= ''
    try:
        with open(file, 'r', encoding='UTF-8') as row:
            for i in range(10):
                data = row.readline()
                final += data
        return final
    except FileNotFoundError:
        print(f"File does not exist")
    
def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution-display-the-head-of-a-file.py [FILE path]")
        print(f"Error: of input data")
    else:
        print(tenline_reader(sys.argv[1]))
        
if __name__ == '__main__':
    main()
