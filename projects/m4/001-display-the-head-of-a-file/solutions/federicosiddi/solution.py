import sys

try:
    output = ""
    with open(sys.argv[1], "r") as file:
        for x in range(10):
            line = file.readline()
            line.rstrip()
            output += line
        print(output)
except FileNotFoundError as error_msg:
    print(error_msg)
except IndexError:
    print("Please provide a file to read as argument")
