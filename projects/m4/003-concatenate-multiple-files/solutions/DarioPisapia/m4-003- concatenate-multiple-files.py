import sys

try:
    if sys.argv[1:] == []:
            print("Argument missing, please enter the names of the files")
    
    for f in sys.argv[1:]:
        with open(f, "r") as files:
            print(files.read())

except FileNotFoundError as file:
    print(f"The file \'{file.filename}\' does not exists in this directory")
