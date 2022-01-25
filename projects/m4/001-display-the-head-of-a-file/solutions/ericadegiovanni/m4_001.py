import sys

# display the first 10 lines of a file whose name is provided as a command line argument.

# if the command line argument is omitted.
if len(sys.argv) != 2:
    print('The command line argument is omitted.')
else:
    try:
        text = open(sys.argv[1])
        line = text.readline()
        count = 0
        while  count < 10 and line != '':
            print(line.rstrip())
            count += 1
            line = text.readline()
        text.close()

    # if the file requested by the user does not exist
    except FileNotFoundError:
        print('The file does not exist')       

