

def isSublist(lst_1,lst_2):
    if len(lst_2) == 0:
            return True
    elif len(lst_1) < len(lst_2):
        return False
    else:
        main_lst = lst_1
        sub_lst = lst_2  
    for element in sub_lst:
        if element not in main_lst:
            return False
    if len(sub_lst) > 1:
        for i in range(0,len(sub_lst)-1):
            if main_lst.index(sub_lst[i]) -1 != main_lst.index(sub_lst[i+1]) and main_lst.index(sub_lst[i]) +1 != main_lst.index(sub_lst[i+1]):
                return False
        return True
    else:
        return True       

def main():
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[1, 12, 3, 4, 11,15,17]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[1,17]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[3, 4, 11]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[1]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[127]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[4]) else 'It is not a sublist'),
    print('It is a sub list' if isSublist([1, 12, 3, 4, 11,15,17],[1, 12, 3, 4, 11,15,17,22]) else 'It is not a sublist'),
if __name__ == '__main__':
    main()
