
import sys

try:
    with open(sys.argv[1], "r") as file:
        lines = file.readlines()
        for l in range(10):
            line = lines[l].rstrip("\n")
            print(line)
except FileNotFoundError:
    print("The file does not exists or it is not in this directory")
except IndexError:
    print("Argument omitted")
