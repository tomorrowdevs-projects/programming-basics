import sys

if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line to view it.")
else:
    for argument in sys.argv[1:]:
        try:
            with open(argument) as file:
                for line in file:
                    print(line.strip())
        except FileNotFoundError:
            print("Error! File '{}' not found.".format(argument))
        except:
            print("Error! File '{}' cannot be displayed, make sure it is not a folder.".format(argument))