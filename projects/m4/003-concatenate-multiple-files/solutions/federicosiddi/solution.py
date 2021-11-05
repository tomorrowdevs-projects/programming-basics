import sys

if len(sys.argv) == 1:
    print("Please provide files to read as argument")
    quit()

try:
    for file in sys.argv[1:]:
        with open(file, "r") as file:
            for line in file:
                print(line.rstrip())
except FileNotFoundError as err:
    print(err)
    
