# determines whether or not one list is a sublist of another.

def isSublist(long_list, short_list):

    #  Your function should take two lists, larger and smaller, as its only parameters.
    #  It should return True if and only if smaller is a sublist of larger.

    long_string = [str(i) for i in long_list]
    long_string = ''.join(long_string)

    short_string = [str(i) for i in short_list]
    short_string = ''.join(short_string)

    if short_string in long_string:
        return True
    else:
        return False
    

def main():
  
    print(isSublist([1,2,3,4], [1]))
    print(isSublist([1,2,3,4], [2,3]))
    print(isSublist([1,2,3,4], [2,4]))
    print(isSublist([1,2,3,4], [1,2,3,4]))
    print(isSublist([1,2,3,4], []))
   
if __name__ == '__main__':
    main()