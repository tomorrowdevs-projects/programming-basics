import sys

try:
    with open(sys.argv[1], 'r') as file:
        lines_list = file.readlines()
        for line in lines_list[:10]:
            print(line)
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")

