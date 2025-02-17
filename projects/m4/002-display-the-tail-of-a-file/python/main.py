import sys

try:
    file_name = sys.argv[1]
    
    file = open(file_name,'r')

    content_of_file = file.read()

    #Each element in list_of_lines is a file's row
    list_of_lines = content_of_file.split('\n')
    
    #put the index at the first of the last ten row
    index = len(list_of_lines)-10
    
    while index < len(list_of_lines):
        print(list_of_lines[index])
        index +=1
    
    file.close()
except FileNotFoundError:
    print("File not founded")
except IndexError:
    print("Command line argument (file name) is omitted")