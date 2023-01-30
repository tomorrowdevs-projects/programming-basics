import sys

"""
Display the last 10 lines of a file whose name is provided as a command line argument.
Read the file once, and store 10 lines from the file at one time.
Display an appropriate error message if the file requested by the user does not exist, or if the command line
argument is omitted.
"""

if len(sys.argv) != 2:
    print('The command line argument is omitted.')
else:
    try:
        with open(sys.argv[1], 'r') as text:
            text_tail = text.readlines()[-10:]
            [print(line.strip()) for line in text_tail]
        
    except FileNotFoundError:
        print('The file does not exist') 