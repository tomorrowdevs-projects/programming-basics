def is_sublist(a, b):
    """
    This function take two list as parameters and return True if the second list is a subtring of the first one.
    is_sublist uses check_list to keep track of all value in the first list in case of repeated values because 
    index method return only the index of the first occurence of the specified value.
    Whit the length of check_list the function can slice the first list and check the equality of the values. 
     """
    flag = False
    if not b or (len(b) == 1 and b[0] in a) or a == b:
        flag = True
    elif len(b) > len(a):
        flag = False
    else:
        check_list = []
        for i in range(len(b)):
            if b[i] not in a:
                continue
            else:
                if b[i] not in check_list:
                    ind = a.index(b[i])
                    sliced_a = a[ind:len(a)]
                    n = 0
                    check_list.append(a[i])
                    while n < len(b) and len(b) <= len(sliced_a):
                        if b[n] == sliced_a[n]:
                            flag = True
                            n += 1
                        else:
                            n += 1
                            flag = False
                    break
                else:
                    check_list.append(a[i])
                    n = 0
                    ind = a.index(b[i], len(check_list))
                    sliced_a = a[ind:len(a)]
                    while n < len(b) and len(b) <= len(sliced_a):
                        if b[n] == sliced_a[n]:
                            n += 1
                            flag = True
                        else:
                            flag == False
                    break
    return flag

if __name__ == "__main__":
    print(is_sublist([1, 2, 3, 4, 5], [2, 3, 4]))
    print(is_sublist([1, 2, 3, 4, 5], [2, 4]))
    print(is_sublist([1, 2, 3, 4, 5], [1, 5]))
    print(is_sublist([1, 2, 3, 4, 5], []))
    print(is_sublist([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
    print(is_sublist([1, 2, 3, 4, 5], [5]))
    print(is_sublist([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]))
    print(is_sublist(["a", "b", "c", "d", "e"], ["c", "d", "e"]))
    print(is_sublist(["a", "b", "d", "e"], ["c", "d", "e"]))
    

