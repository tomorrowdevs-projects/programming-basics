import sys

try:
    with open(sys.argv[1], "r") as file:
        lines = file.readlines()
        for l in range(-10, 0):
            print(lines[l].rstrip("\n"))
        
except FileNotFoundError:
    print(f"In this directory does not exist a file named {sys.argv[1]}")
except IndexError:
    print("Argument omitted")
