def flatten_list(data):
    if len(data) == 0:
        return data
    if type(data[0]) == list:
        l1 = flatten_list(data[0])
        l2 = flatten_list(data[1:])
        return l1 + l2
    else:
        l1 = [data[0]]
        l2 = flatten_list(data[1:])
        return l1 + l2

def main():
    demo1 = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
    demo2 = []
    demo3 = [1, 2, 3, [4, 5, [6], 7]]
    demo4 = [1, 2, 3, 4]
    print(flatten_list(demo1))
    print(flatten_list(demo2))
    print(flatten_list(demo3))
    print(flatten_list(demo4))

if __name__ == "__main__":
    main()


