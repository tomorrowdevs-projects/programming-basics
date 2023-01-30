from sys import argv

if argv[1:] == []:    #appropriate error message if program is started without any command line arguments.
    print("No command line argument entered.")
else:
    for file in argv[1:]:    #argv[0] is the script name, starting from argv[1] are the command line arguments/files names.
                             #in this case is a loop of argv[1:] because we have to concatenate the files if there is more than one provided as command line arguments.
        try:                 
            with open(file, 'r') as file:
                lines = file.readlines()
                for line in lines:
                    print(line)
                print(" ")    #empty line between files.
        except FileNotFoundError:
            print(("File '{}' does not exist.") .format(file))
        except IndexError:
            print("Command line argument is omitted.")
    