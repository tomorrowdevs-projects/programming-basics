def flatten_list(data):
    if len(data) == 0:
        return data
    if type(data[0]) == list:
        l1 = flatten_list(data[0])
        l2 = flatten_list(data[1:])
    else:
        l1 = [data[0]]
        l2 = flatten_list(data[1:])
    return l1 + l2


if __name__ == "__main__":
    example_lists = [[1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]], ["a", ["bb", ["ccc", "ddd"], "ee", "ff"], "g", "h"], [ [4, [True, False], 6, "string"], [8.5, 9.5] ]]
    for l in example_lists:
        print("Original list: {}\nFlattened list: {}\n\n".format(l, flatten_list(l)))
    print("Original list: {}\nFlattened list: {}".format(example_lists, flatten_list(example_lists)))