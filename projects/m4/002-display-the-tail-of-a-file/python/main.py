import sys

try:
    with open(sys.argv[1], 'r') as file:
        last10 = file.readlines()[-10:]
        for line in last10:
            print(line)
except FileNotFoundError:
    print("File does not exist.")
except IndexError:
    print("Command line argument is omitted.")