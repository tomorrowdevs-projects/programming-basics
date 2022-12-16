def is_sublist(larger, smaller):
    """Returns true if the smaller list is a sublist of the larger list."""
    if len(smaller) > len(larger):
        return False
    elif len(smaller) == 0:
        return True
    else:
        if smaller[0] in larger and smaller[-1] in larger:
            first_element_index = larger.index(smaller[0])
            last_element_index = larger.index(smaller[-1])
            if smaller == larger[first_element_index:last_element_index+1]: 
                return True
        else: 
            return False

def main():
    larger_list = [1,2,3,4]
    smaller_lists = [[1], [2], [2,3], [2,4], [1,4], [], [1,3,2,4], [1,2,3,4], [0,1,2,3,4]]
    for l in smaller_lists:
        if is_sublist(larger_list, l):
            print("{} is a sublist of {}".format(l, larger_list))
        else: 
            print("{} isn't a sublist of {}".format(l, larger_list))

if __name__ == "__main__":
    main()