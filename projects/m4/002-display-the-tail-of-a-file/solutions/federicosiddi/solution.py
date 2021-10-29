import sys

try:
    lines = []
    with open(sys.argv[1], "r") as file:
        for line in file:
            line.rstrip()
            lines.append(line)
            if len(lines) > 10:
                lines.pop(0)
        for line in lines:
            print(line.rstrip())
except FileNotFoundError as error_msg:
    print(error_msg)
except IndexError:
    print("Please provide a file to read as argument")
