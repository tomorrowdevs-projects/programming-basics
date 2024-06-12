#tail-of-file
#print last ten lines of a file

import sys

def tailOfFile(args):
    #open file, get last row number with enumerate and initiate counter
    f = open(args,'r')
    for count, line in enumerate(f):
        pass
    #print last 10 lines after closing and re-opening file
    f.close()
    f = open(args,'r')
    tails_of_file = f.readlines()[(count-10):count]
    print(*tails_of_file)
    f.close()

#call function for second argument of bash's prompt if file exist
if __name__ == '__main__':
    try:
        tailOfFile(sys.argv[1])
    except:
        print('File doesn\'t exist or argoument is null.')