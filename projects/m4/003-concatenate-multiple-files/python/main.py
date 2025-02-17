import sys

for file in sys.argv[1:]:
    try:
        with open(file, "r") as file:
            lines = file.readlines()
            for line in lines:
                print(line)
    except FileNotFoundError:
        print("ERROR: The file doesn't exist!")
    except IndexError:
        print("ERROR: Provide a file as argument in command line")