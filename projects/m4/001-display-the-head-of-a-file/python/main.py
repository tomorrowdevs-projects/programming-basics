import sys

try:
    file_name = sys.argv[1]
    
    file = open(file_name,'r')

    for line in file:
        print(line)

    file.close()
    
except FileNotFoundError:
    print("File not founded")
except IndexError:
    print("Command line argument (file name) is omitted")
