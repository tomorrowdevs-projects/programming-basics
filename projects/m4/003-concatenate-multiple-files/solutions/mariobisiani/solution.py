#script will concatenate print concatenation of two file taken as argument

import sys

#function that concatenate files content except first command
def concatenate(args):
    for a in args[1:]:
        f = open(a,'r')
        print(*f.readlines())
        f.close()
        
#call function for second argument of bash's prompt if file exist
if __name__ == '__main__':
    try:
        concatenate(sys.argv)
    except:
        print('File doesn\'t exist or argoument is null.') 