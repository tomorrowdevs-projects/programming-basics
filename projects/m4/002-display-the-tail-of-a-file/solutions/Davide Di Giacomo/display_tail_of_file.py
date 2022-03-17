#write a program who displays the last 10 lines of a file whose name is provided as a command line argument.
import sys

#if command line doesn't have argument
if len(sys.argv)!=2:
    print("the argument in your command line is omitted!")
else:
    #check file by try-except 
    try: #try to open a file
        filename=sys.argv[1]
        #with a reverse cicle print the last 10 lines
        for x in range(-10, 0):
            with open(filename) as file_object:
                contents = file_object.readlines()[x]
                print(contents)
    #if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")