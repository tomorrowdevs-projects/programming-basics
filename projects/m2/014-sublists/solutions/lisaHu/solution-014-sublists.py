def is_sublist(s,l):
    #unless told otherwise, the result (variable) is false
    sublist = False
    if len(s) >= 2:
        #if amount of elements is 2 or more, it will itirate in range of amount of small list minus 1
        #1st if statement: if any element in small list is not in large list, it will break the loop
        #without making the result true
        #2nd if statement: otherwise, it will look for the element position in large list and check if the
        #next ones in small and large list are the same, making the result true (eventually)
        for i in range(len(s)-1):
            if s[i] not in l:
                break
            x = l.index(s[i])
            if s[i] == l[x] and s[i+1] == l[x+1]:
                sublist = True
    else:
        #if amount of elements in small list is none, it will make the result True.
        #if amount is just one, it will just check if the element is in large list
        if s == []:
            sublist = True
        elif s[0] in l:
            sublist = True
    return sublist


if __name__ == "__main__":
    print(is_sublist([1,30,5,12], [2,30,4,9,11,0,7]))
    print(is_sublist([], [2,30,4,9,11,0,7]))
    print(is_sublist([30,4,9,11], [2,30,4,9,11,0,7]))
    print(is_sublist([30], [2,30,4,9,11,0,7]))
    print(is_sublist(['a','c'], ['a','b','c','d']))
    print(is_sublist(['e'], ['a','b','c','d']))
    print(is_sublist(['b','c','d'], ['a','b','c','d']))