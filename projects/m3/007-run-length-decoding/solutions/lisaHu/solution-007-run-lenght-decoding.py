from re import L


def decompress_list(l):
    #if list is empty, break out from recursion
    if l == []:
        return l
    #else, return list of characters repeated for tot times + recurse the same function minus the first 2 items
    else:
        return list(l[0] * l[1]) + decompress_list(l[2:])

def main():
    l1 = ["A",12,"B",4,"A",6,"B",1]
    l2 = ['p', 5, 'j', 7, 'h', 2]
    print(decompress_list(l1))
    print(decompress_list(l2))

if __name__ == '__main__':
    main()