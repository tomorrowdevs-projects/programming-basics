#It displays the first 10 lines of a file whose name is provided as a command line argument
#Display an appropriate error message if the file requested by the user does not exist
#or if the command line argument is omitted.
import sys

#if command line doesn't have argument
if len(sys.argv)!=2:
    print("the argument in your command line is omitted!")
else:
    try: #try to open a file
        filename=sys.argv[1]
        with open(filename) as file_object:
            #with a cicle print a line
            for x in range(10):
                contents = file_object.readline()
                print(contents)
    #if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")
