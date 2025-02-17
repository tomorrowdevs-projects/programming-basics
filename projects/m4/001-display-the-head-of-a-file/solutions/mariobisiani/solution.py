#head-of-file
#print first ten lines of a file

import sys

def headOfFile(args):
    #open file and initiate counter i
    f = open(args,'r')
    i = 1
    #print lines until counter reach 10 lines and then close the file and exit
    for line in f.readlines():
        if i < 10:
            print(line)
            i+=1
        else:
            f.close()

#call function for second argument of bash's prompt if file exist
if __name__ == '__main__':
    try:
        headOfFile(sys.argv[1])
    except:
        print('File doesn\'t exist or argoument is null.') 