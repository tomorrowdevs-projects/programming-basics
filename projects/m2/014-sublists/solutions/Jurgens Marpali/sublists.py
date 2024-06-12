def isSublist(long_list, short_list):


    if all(i in long_list for i in short_list) and len(short_list)<len(long_list):
        return True
    else:
        return False
  

def main():
    print(isSublist([1,2,3,4,5], [1,2]))
    print(isSublist([1,2,3,4,5], [3,4]))
    print(isSublist([1,2,3,4,5], [4,7]))
    print(isSublist([1,2,3,4,5], []))

if __name__ == "__main__":
    main()
