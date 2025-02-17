import sys

try:
    with open(sys.argv[1], 'r') as file:    #argv is automatically a list of strings representing the arguments (as separated by spaces) on the command-line.
        lines = file.readlines()                              #command-Line arguments are in argv[1+n] and argv[0] is the script name itself and can be ignored.       
        for line in lines[0:10]:
            print(line)      #
except FileNotFoundError:
    print("File does not exist.")
except IndexError:
    print("Command line argument is omitted.")