import sys

def tail_reader(file):
    final= ''
    try:
        with open(file, 'r', encoding='UTF-8') as data:
            for row in (data.readlines() [-10:]):
                final += row
        return final
    except FileNotFoundError:
        print(f"File does not exist")
    
def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution-m4-2.py [FILE path]")
        print(f"Error: of input data")
    else:
        print(tail_reader(sys.argv[1]))
        
if __name__ == '__main__':
    main()