def is_sublist(a, b):
    if not b or (len(b) == 1 and b[0] in a) or a == b:
        return True
    elif len(b) > len(a):
        return False
    elif b[0] not in a:
        return False
    else:
        start = 0
        while start < len(a)-1:
            if b[0] in a[start+1 : len(a)+1]:
                ind = a.index(b[0], start ,len(a)+1)
                sliced_a = a[ind : (ind+len(b))]
                if b == sliced_a:
                    return True
                else:
                    start += 1
            else:
                return False

if __name__ == "__main__":
    print(is_sublist([1, 2, 3, 4, 5], [2, 4]))
    print(is_sublist([1, 2, 3, 4, 5], [2, 3, 4]))
    print(is_sublist([1, 2, 3, 4, 5], [1, 5]))
    print(is_sublist([1, 2, 3, 4, 5], []))
    print(is_sublist([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
    print(is_sublist([1, 2, 3, 4, 5], [5]))
    print(is_sublist([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]))
    print(is_sublist(["a", "b", "c", "d", "e"], ["c", "d", "e"]))
    print(is_sublist(["a", "b", "d", "e"], ["c", "d", "e"]))
    print(is_sublist(["a", "b", "c", "a", "d", "e"], ["a", "d"]))
    

