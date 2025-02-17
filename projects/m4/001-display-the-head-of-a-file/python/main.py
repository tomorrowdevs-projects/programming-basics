import sys

try:
    with open(sys.argv[1]) as file:
        for lines_read in range(10):
            print(file.readline().strip())
except FileNotFoundError:
    print("File '{}' not found.".format(sys.argv[1]))
except IndexError:
    print("The argument is omitted.")