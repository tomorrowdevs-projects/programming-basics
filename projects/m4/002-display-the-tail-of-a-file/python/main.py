import sys

try:
    with open(sys.argv[1], 'r') as file:
        tail = file.readlines()[-10:]
        for lines in tail:
            print(lines)
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")