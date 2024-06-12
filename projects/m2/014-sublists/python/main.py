def isSublist(larger,smaller):
    if len(smaller) == 0 or smaller == larger:
        return True

    elif smaller[0] in larger and smaller[-1] in larger:
        index1 = larger.index(smaller[0])
        index2 = larger.index(smaller[-1])
        if smaller == larger[index1:index2+1]:
            return True
        else:
            return False
    else:
        return False

def main():
    print("Larger list: [1, 6, 21, 5]")
    larger = [1, 6, 21, 5]
    sub_lists = [[1], [6, 21], [1, 5], [], [1, 6, 21, 5], [1, 6 , 12, 21, 5]]
    for sub in sub_lists:
        if isSublist(larger,sub) == True:
            print(("{} is a sublist") .format(sub))
        else:
            print(("{} isn't a sublist") .format(sub))

if __name__ == "__main__":
    main()